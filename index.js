var cryptoFeed = document.querySelector('.left-feed')


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

        console.log(data)
          
          for(var i = 0; i < 10; i++){

            console.log(data.data.rates)
              var card = document.createElement('div')
              card.classList = 'crypto-exchange'
              var ID = document.createElement('h4')
              var name = document.createELement('h4')
              var symbol = document.createELement('h4')
              var date = document.createElement('p')
              var currentPrice = document.createElement('p')
              var image = document.createElement('img')
              image.className = 'coin-images'
              ID.
              
          }
     })

}

getExchangeFeed()

