// DOM Elements 

let portfolioDisplay = $('#portfolio-row-input');
let modalEl = $('#exampleModal');
let formEl = $('portfolio-form');
let formSubmitEl = $('crypto-submit');
let coinNameInputEl = $('#coin-list');
let coinDateInputEl = $('#coin-date');
let coinNumberInputEl = $('#coin-number');
let coinPriceInputEl = $('#coin-price');
let coinInvestmentOutputEl = $('#coin-investment');


function printCoinInfo (coinName, date, number, price) {

    let portfolioRowEl = $('<tr>');

    let coinNameTdEl =  $('<td>').text(coinName);

    let coinDateTdEl = $('<td>').text(date);

    let coinNumberTdEl = $('<td>').text(number);

    let coinPriceTdEl = $('<td>').text('$' + price);

    let totalInvestment = calculateTotalInvestment(price, number);

    var totalInvestmentTdEl = $('<td>').text('$' + totalInvestment);

    let deleteInvestmentBtn = $('<td>').addclass('close-button').text('X');

    portfolioRowElement.append(
        coinNameTdEl, 
        coinDateTdEl, 
        coinNumberTdEl,
        coinPriceTdEl,
        totalInvestment,
        deleteInvestmentBtn
    );

    portfolioDisplay.append(portfolioRowEl);
    modalEl.removeClass('reveal');
    modalEl.addclass('hide');
}

function calculateTotalInvestment (price, number){
    let total = price * number;
    return total;
}

function handleDeleteCoin(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

function handlePortfolioFormSubmit(event) {
    event.preventDefault();
  
    let coinName = coinNameInputEl.val().trim();
    var coinDate = coinDateInputEl.val();
    let  coinPrice = coinNumberInputEl.val().trim();
    let coinNumber = coinNumberInputEl.val().trim();
  
    printProjectData(coinName, coinDate, coinPrice, coinNumber);
  
    formEl[0].reset();
  }
  

// curl -X 'GET' \
//   'https://api.coingecko.com/api/v3/coins/list' 
//   -H 'accept: application/json'

// https://api.coingecko.com/api/v3/coins/list
