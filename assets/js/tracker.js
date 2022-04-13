// DOM Elements 

let modalOpenerEl = $('#modal-opener')
let portfolioDisplay = $('#portfolio-row-input');
let modalEl = $('#example-modal');
let portfolioFormEl = $('#portfolio-form');
let formSubmitEl = $('#crypto-submit');
let coinNameInputEl = $('#coin-list');
let selectedCoinEl = $('coin-value');
let coinDateInputEl = $('#coin-date');
let coinNumberInputEl = $('#coin-number');
let coinPriceInputEl = $('#coin-price');
let coinInvestmentOutputEl = $('#coin-investment');
let closeModalEl = $('#close-modal');

$ (document).foundation();


function openModal(event){
    event.preventDefault();
}

modalOpenerEl.on('click', openModal);


function printCoinInfo (name, date, number, price) {

    let portfolioRowEl = $('<tr>');

    // getApi();

    // let coinName = data[i].name.val();
    // console.log(coinName);

    // let coinOptionsTdEl =  $('<td>').text(coinOptions.value);

    // $( '.coin-name-input' ).prepend( `<p>${coinOptions}</p>` );

    let coinDateTdEl = $('<td>').text(date);

    $( ".coin-date-input" ).prepend( `<p>${date}</p>` );

    let coinNumberTdEl = $('<td>').text(number);

    $( ".coin-number-input" ).prepend( `<p>${number}</p>` );

    let coinPriceTdEl = $('<td>').text('$' + price);

    $( ".coin-price-input" ).prepend( `<p>${price}</p>` );

    let totalInvestment = calculateTotalInvestment(number, price);

    $( ".coin-investment-input" ).prepend( `<p>$${totalInvestment}</p>` );

    var totalInvestmentTdEl = $('<td>').text('$' + totalInvestment);

    let deleteInvestmentBtn = $('<td>').text('X');

    // $('button').addClass('close-button');

    $( ".delete-investment" ).prepend(deleteInvestmentBtn);

    // let removeBtn = document.createElement('input');
    // removeBtn.type = 'button';
    // removeBtn.className = 'close-button';
    // // btn.onclick = (function(entry) {return function() {chooseUser(entry);}})(entry);
    // deleteInvestmentBtn.prepend(removeBtn);



    portfolioRowEl.append(
        // coinNameTdEl, 
        coinDateTdEl, 
        coinNumberTdEl,
        coinPriceTdEl,
        totalInvestmentTdEl,
        deleteInvestmentBtn
    );

    // portfolioDisplay.append(portfolioRowEl);
    // modalEl.removeAttr('data-reveal');

    $('#crypto-submit').on('click', function () {
         $(modalEl).foundation('reveal', 'close');
    })
}

// function closeModal(){
//     if(modalEl.attr('data-reveal')){
//         window.close();
//     }
// }

function calculateTotalInvestment (number, price){
    let total = number * price;
    return total;
}

function handleDeleteCoin(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

function handlePortfolioFormSubmit(event) {
    event.preventDefault();
  
    let coinName = selectedCoinEl.val();
    console.log();
    let coinDate = coinDateInputEl.val();
    let coinPrice = coinNumberInputEl.val().trim();
    let coinNumber = coinNumberInputEl.val().trim();
  
    printCoinInfo(coinName, coinDate, coinNumber, coinPrice);
  
    portfolioFormEl[0].reset();
  }

    formSubmitEl.on('click', handlePortfolioFormSubmit);
    // formSubmitEl.on('click', closeModal());
    portfolioDisplay.on('click', '.close-button', handleDeleteCoin);




    function getApi() {

        var requestUrl = 'https://api.coingecko.com/api/v3/coins/list';
      
        fetch(requestUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            console.log(data[0].name);
            for(let i = 0; i < data.length; i++) {
                let coinOptions = document.createElement("option");
                    coinOptions.value = data[i].name;
                    coinOptions.innerHTML = data[i].name;
                    coinNameInputEl.append(coinOptions);}
          })
    }

    getApi();
    

