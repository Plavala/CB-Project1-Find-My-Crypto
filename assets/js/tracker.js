// DOM Elements 

let modalOpenerEl = $('#modal-opener')
let portfolioDisplay = $('#portfolio-row-input');
let modalEl = $('#exampleModal');
let portfolioFormEl = $('#portfolio-form');
let formSubmitEl = $('#crypto-submit');
let coinNameInputEl = $('#coin-list');
let coinDateInputEl = $('#coin-date');
let coinNumberInputEl = $('#coin-number');
let coinPriceInputEl = $('#coin-price');
let coinInvestmentOutputEl = $('#coin-investment');

$ (document).foundation();


function openModal(event){
    event.preventDefault();
}

modalOpenerEl.on('click', openModal);


function printCoinInfo (coinName, date, number, price) {

    let portfolioRowEl = $('<tr>');

    let coinNameTdEl =  $('<td>').text(coinName);

    $( ".coin-name-input" ).prepend( `<p>${coinName}</p>` );

    let coinDateTdEl = $('<td>').text(date);

    $( ".coin-date-input" ).prepend( `<p>${date}</p>` );

    let coinNumberTdEl = $('<td>').text(number);

    let coinPriceTdEl = $('<td>').text('$' + price);

    let totalInvestment = calculateTotalInvestment(number, price);

    var totalInvestmentTdEl = $('<td>').text('$' + totalInvestment);

    let deleteInvestmentBtn = $('<td>').addClass('close-button').text('X');



    portfolioRowEl.append(
        coinNameTdEl, 
        coinDateTdEl, 
        coinNumberTdEl,
        coinPriceTdEl,
        totalInvestmentTdEl,
        deleteInvestmentBtn
    );

    portfolioDisplay.append(portfolioRowEl);
    modalEl.removeData();
}

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
  
    let coinName = coinNameInputEl.val();
    let coinDate = coinDateInputEl.val();
    let coinPrice = coinNumberInputEl.val().trim();
    let coinNumber = coinNumberInputEl.val().trim();
  
    printCoinInfo(coinName, coinDate, coinNumber, coinPrice);
  
    portfolioFormEl[0].reset();
  }

    formSubmitEl.on('click', handlePortfolioFormSubmit);
    portfolioDisplay.on('click', '.close-button', handleDeleteCoin);


// curl -X 'GET' \
//   'https://api.coingecko.com/api/v3/coins/list' 
//   -H 'accept: application/json'

// https://api.coingecko.com/api/v3/coins/list

// $(document).ready(function() {
//     $("#crypto-submit").on('click', function(event) {
//         alert("Submit button is clicked!");
//         event.preventDefault();
//     });
// });