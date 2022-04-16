var cryptoFeed = document.querySelector('.left-feed')
var topCrypto = document.querySelector('.crypto-card')
var cryptoImg = document.querySelector('.market-image')



function getNewsFeed(){
    var API = 'pub_63632e143f35546d19fc0391e7c7e079b72a'
    var url = 'https://newsdata.io/api/1/news?apikey=' + API + '&q=crypto&country=us&language=en'

    fetch(url)
      .then(function(response){
          return response.json()
      })
      .then(function(data){
          console.log(data)
      })
}


function getExchangeFeed() {

    var marketUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

    fetch(marketUrl)
      .then(function(response) {
          return response.json();
      })

      .then(function(data) {
        for(var i = 0; i < 5; i++) {
          console.log(data[i])
          //Style for market Boxes at top of screen
          var marketCard = document.querySelector('.market-card')
          

          var cardsCell = document.createElement('div')
          cardsCell.classList = 'card-cell cell'
          
          var card = document.createElement('div');
          card.classList = "cryptoCard card";

          var NandPRow = document.createElement('div')
          NandPRow.classList = 'row nameandpriceRow marketCard-row small-2 large-4 columns'
        
          var imgAndPchange = document.createElement('div')
          imgAndPchange.classList = 'row imgandpchange marketCard-row small-2 large-4 columns'

          var dateRow = document.createElement('div')
          dateRow.classList = 'row dateRow marketCard-row small-2 large-4 columns'

          
          marketCard.append(cardsCell) 
          cardsCell.appendChild(card);
          card.append(NandPRow, imgAndPchange, dateRow)
         

          var name = document.createElement('h6');
          
          var price = document.createElement('p')
          

          var img = document.createElement('img')
          img.setAttribute('src', imgUrl)
          img.classList = 'marketimg'
          var priceChange = document.createElement('p')
          priceChange.classLIST = 'pricechanges'
          var pricePercentageChange = document.createElement('p')

          var date = document.createElement('p');

          var imgUrl = data[i].image
          var currentPrice = data[i].current_price;
          var pChange = data[i].price_change_24h;
          var PercentageChange = data[i].price_change_percentage_24h;

          
          name.textContent = data[i].name
          price.textContent = '$ ' + currentPrice
          priceChange.textContent = '$' + Math.floor(pChange) + ' %' + PercentageChange
          date.textContent= data[i].last_updated;
        

          
          NandPRow.append(name, price)
          imgAndPchange.append(img, priceChange, pricePercentageChange)
          dateRow.append(date)





        }

        for(j = 0; j < 10; j++) {
          //style for market at the left of the screen
         
          var cardSection = document.querySelector('.card-section')
          var row = document.createElement('div')
          row.classList = 'row market-mover-row'
          var symbolandpriceRow = document.createElement('div')
          symbolandpriceRow.classList = 'row SymbolandPricerow'
          var nameandchangeRow = document.createElement('div')
          nameandchangeRow.classList = 'row Name-Change-Row'
          row.classList = 'marketRow'
          cardSection.append(row)
          row.append(symbolandpriceRow, nameandchangeRow)
          symbolandpriceRow.append(symbol, currentPrice)
          nameandchangeRow.append(name, priceChange, percentageChange)


          var symbol = document.createElement('h5');
          symbol.textContent = data[j].symbol
          var name = document.createElement('p')
          name.textContent = data[j].name
          var currentPrice = document.createElement('p')
          currentPrice.textContent = data[j].current_price
          var priceChange = document.createElement('p')
          priceChange.textContent = data[j].price_change_24h
          var percentageChange = document.createElement('p')
          percentageChange.textContent = '(' + data[j].price_change_percentage_24h + ')' + '%'
         
          





          


          
        }
        })

}

getExchangeFeed()

