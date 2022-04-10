/* <td id="coin-name">Coin Content Goes Here</td>
<td id="coin-date">Date Content Goes Here</td>
<td id="coin-number">Number of Coins Goes Here</td>
<td id="coin-price">Purchase Price Goes Here</td>
<td id="coin-investment">Total Investment Goes Here</td> */

let coinNameDisplay = $('#coin-name');

function printCoinInfo (coinName, date, number, price, investment) {

    let portfolioRowElement = $('<tr>');

    let coinNameTdEl = = $('<td>').text(coinName);

    let coinDateTdEl = $('<td>').text(date);

    let coinNumberTdEl = $('<td>').text(number);

    let coinPriceTdEl = $('<td>').text(price);

    let totalInvestmentTdEl = $('<td>').text(investment);

    let totalInvestment = calculateTotalInvestment(price, investment);

    let deleteInvestmentBtn = $('<td>').addclass('close-button').text('X');



}