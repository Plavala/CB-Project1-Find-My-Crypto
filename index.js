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
          var cardsContainer = document.querySelector('.crypto-market');  
          var marketCard = document.querySelector('.market-card')
          var cardDiv = document.createElement('div')
          var cardsCell = document.createElement('div')
          cardsContainer.append(cardDiv)
          cardsCell.classList = 'card-cell cell'
          marketCard.append(cardsCell) 
          var card = document.createElement('div');
          card.classList = "cryptoCard card";
          cardsCell.appendChild(card);
            var name = document.createElement('p');
            var date = document.createElement('p');
            var currentPrice = data[i].current_price;
            name.textContent = data[i].name + '\n'+ currentPrice;
            var priceChange = data[i].price_change_24h;
            var pricePercentageChange = data[i].price_change_percentage_24h;
            var prices = document.createElement('p')
            prices.textContent = '$'+ priceChange + '\n' + '%'+ pricePercentageChange
            var img = document.createElement('img')
            var imgUrl = data[i].image
            img.setAttribute('src', imgUrl)
            date.textContent= data[i].last_updated;
            card.append(img)
            card.append(name);
            card.append(prices)
            card.append(date);
        }
        })

}

getExchangeFeed()

