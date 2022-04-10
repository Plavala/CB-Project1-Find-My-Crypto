// DOM Elements 

let portfolioDisplay = $('#portfolio-row-input');
let modalEl = $('#exampleModal');
let formEl = $('portfolio-form');
let formSubmitEl = $('crypto-submit');
let coinNameDisplay = $('#coin-name');


function printCoinInfo (coinName, date, number, price, investment) {

    let portfolioRowEl = $('<tr>');

    let coinNameTdEl =  $('<td>').text(coinName);

    fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
        });

    let coinDateTdEl = $('<td>').text(date);

    let coinNumberTdEl = $('<td>').text(number);

    let coinPriceTdEl = $('<td>').text(price);

    let totalInvestmentTdEl = $('<td>').text(investment);

    let totalInvestment = calculateTotalInvestment(price, investment);

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

function calculateTotalInvestment (price, investment){
    let total = price * investment;
    return total;
}

function handleDeleteProject(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}


// curl -X 'GET' \
//   'https://api.coingecko.com/api/v3/coins/list' \
//   -H 'accept: application/json'

// https://api.coingecko.com/api/v3/coins/list

formEl