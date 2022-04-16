// DOM Elements 

let modalOpenerEl = $('#modal-opener');
let portfolioDisplay = $('#portfolio-row-input');
let modalEl = $('#example-modal');
let portfolioFormEl = $('#portfolio-form');
let formSubmitEl = $('#crypto-submit');
let coinNameInputEl = $('#coin-list');
let selectedCoinEl = $('#coin-value');
let coinDateInputEl = $('#coin-date');
let coinNumberInputEl = $('#coin-number');
let coinPriceInputEl = $('#coin-price');
let coinInvestmentOutputEl = $('#coin-investment');
let closeModalEl = $('#close-modal');

const coinInfo = [];



// Prevents default behavior on the main form 
$ (document).foundation();

function openModal(event){
    event.preventDefault();
}

modalOpenerEl.on('click', openModal);

// Call Local Storage function 

getStorage();

//Dynamically create coin info

function printCoinInfo (name, date, number, price) {

    let portfolioRowEl = $('<tr>');

    let coinNameTdEl =  $('<td>').text(name);

    let coinDateTdEl = $('<td>').text(date);

    let coinNumberTdEl = $('<td>').text(number);

    let coinPriceTdEl = $('<td>').text('$' + price);

    let totalInvestment = calculateTotalInvestment(number, price);

    var totalInvestmentTdEl = $('<td>').text('$' + totalInvestment);

    let deleteInvestmentBtn = $('<button>').addClass('delete-coin-btn');

    deleteInvestmentBtn.text('Remove');

    portfolioDisplay.append(portfolioRowEl);

    portfolioRowEl.append(
        coinNameTdEl, 
        coinDateTdEl, 
        coinNumberTdEl,
        coinPriceTdEl,
        totalInvestmentTdEl,
        deleteInvestmentBtn
    );
    
    let revealEL = $('.reveal-overlay');
    modalEl.css('display', 'none');
    revealEL.css('display', 'none');
    
}

//Calculates the total investment
function calculateTotalInvestment (number, price){
    let total = number * price;
    return total;
}

//Delete button fuction for each row
function handleDeleteCoin(event) {
  var btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

//Form Submitter & Set LocalStorage
function handlePortfolioFormSubmit(event) {
    event.preventDefault();
    let coinName = coinNameInputEl.val().trim();
    let coinDate = coinDateInputEl.val();
    let coinPrice = coinPriceInputEl.val();
    let coinNumber = coinNumberInputEl.val();
  
    printCoinInfo(coinName, coinDate, coinNumber, coinPrice);

    let data = {
      name: coinName,
      date: coinDate,
      price: coinPrice,
      number: coinNumber
    };

    coinInfo.push(data);

    localStorage.setItem('coin-info', JSON.stringify(coinInfo));

    portfolioFormEl[0].reset();
}

// Event Listeners
    formSubmitEl.on('click', handlePortfolioFormSubmit);
    portfolioDisplay.on('click', '.delete-coin-btn', handleDeleteCoin);



//API call
    function getApi() {

        var requestUrl = 'https://api.coingecko.com/api/v3/coins/list';
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            for(let i = 0; i < data.length; i++) {
                let coinOptions = document.createElement("option");
                    coinOptions.value = data[i].name;
                    coinOptions.innerHTML = data[i].name;
                    coinNameInputEl.append(coinOptions);}
          })
    }

    getApi();
    
//Get Local Storage Function
    function getStorage() {
        let data = localStorage.getItem('coin-info');
        if(data){
            const newData = JSON.parse(data);

            for(let i = 0; i < newData.length; i++){
                console.log(newData[i].name);
                
                let portfolioRowEl = $('<tr>');

                let coinNameTdEl =  $('<td>').text(newData[i].name);

                let coinDateTdEl = $('<td>').text(newData[i].date);

                let coinNumberTdEl = $('<td>').text(newData[i].number);

                let coinPriceTdEl = $('<td>').text('$' + newData[i].price);

                let totalInvestment = calculateTotalInvestment(newData[i].number, newData[i].price);

                var totalInvestmentTdEl = $('<td>').text('$' + totalInvestment);

                let deleteInvestmentBtn = $('<button>').addClass('delete-coin-btn');

                deleteInvestmentBtn.text('Remove');

                portfolioDisplay.append(portfolioRowEl);

                portfolioRowEl.append(
                    coinNameTdEl, 
                    coinDateTdEl, 
                    coinNumberTdEl,
                    coinPriceTdEl,
                    totalInvestmentTdEl,
                    deleteInvestmentBtn
                );

            }
        
        }
    }
        
        

   