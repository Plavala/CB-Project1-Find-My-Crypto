/* <td id="coin-name">Coin Content Goes Here</td>
<td id="coin-date">Date Content Goes Here</td>
<td id="coin-number">Number of Coins Goes Here</td>
<td id="coin-price">Purchase Price Goes Here</td>
<td id="coin-investment">Total Investment Goes Here</td> */
// DOM Elements 

let portfolioDisplay = $('#portfolio-row-input');
let modalEl = $('#exampleModal');
let formEl = $('portfolio-form');
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

formEl