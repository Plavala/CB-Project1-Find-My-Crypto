// DOM Elements 

let rootElement = $(document.documentElement);
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

// Prevents default behavior on the main form 
$ (document).foundation();

function openModal(event){
    event.preventDefault();
}

modalOpenerEl.on('click', openModal);

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
    typeof(coinPrice);
    let coinNumber = coinNumberInputEl.val();
  
    printCoinInfo(coinName, coinDate, coinNumber, coinPrice);

    let data = {
      name: coinName,
      date: coinDate,
      price: coinPrice,
      number: coinNumber
    };

    localStorage.setItem('coin-info', JSON.stringify(data));

  
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
            console.log(data);
            for(let i = 0; i < data.length; i++) {
                let coinOptions = document.createElement("option");
                    coinOptions.value = data[i].name;
                    coinOptions.innerHTML = data[i].name;
                    coinNameInputEl.append(coinOptions);}
          })
    }

    getApi();
    

