var cryptoFeed = document.querySelector('.left-feed')
var topCrypto = document.querySelector('.crypto-card')
var cryptoImg = document.querySelector('.market-image')



function getNewsFeed(){
    var API = 'pub_666500b98e18885745dc366f7c4948dced61'
    var url = 'https://newsdata.io/api/1/news?apikey=' + API + '&q=crypto&country=us&language=en'

    fetch(url)
      .then(function(response){
          return response.json()
      })
      .then(function(data){
        console.log(data)


          for(var i = 0; i < 6;i++){

          for(var i = 1; i < 6;i++){

            console.log(data.results)
            var hyperlink = document.createElement('a')
            var hyperlinkUrl = data.results[i].link
            hyperlink.setAttribute('href', hyperlinkUrl) 
            hyperlink.className = 'hyperlink'
            var mediaSection = document.querySelector('.media-section')
            var mediaObjectDiv = document.createElement('div')
            mediaObjectDiv.classList = 'media-object'
            var mediaObjectSection = document.createElement('div')
            mediaObjectSection.classList = 'media-object-section'
            var thumbnailDiv = document.createElement('div')
            thumbnailDiv.classList = 'thumbnail img-section'
            var mainMedia = document.createElement('div')
            mainMedia.classList = 'media media-object-section main-section'
            var content = document.createElement('p')
            content.textContent = data.results[i].description

            var imgUrl = data.results[i].img_url
            var img = document.createElement('img')
            img.setAttribute('src', imgUrl)
            img.style.height = '50px'
            var title = document.createElement('h4')
            title.classList = 'media-title'

            title.textContent = data.results[i].title

            mediaSection.append(hyperlink)
            hyperlink.appendChild(title, mediaObjectDiv, mediaObjectSection)
            mediaSection.appendChild(mediaObjectDiv)
            mediaObjectDiv.append(mediaObjectSection)
            
            
            mediaObjectDiv.append(mainMedia)
            mainMedia.append(content)
            //mainMedia.appendChild
          }
          for(var j = 0; j < 10; j++) {
            var title = document.querySelector('.title')
            var description = document.querySelector('.article-elipsis')
            var readMore = document.querySelector('.read-more')
            var readMoreUrl = data.results[j].link
            readMore.setAttribute('href', readMoreUrl)
  
            title.textContent = data.results[j].title
            title.setAttribute('href', readMoreUrl)
            description.textContent = data.results[j].description
            
          }
        }
      })
}
getNewsFeed()

function getExchangeFeed() {

    var marketUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

    fetch(marketUrl)
      .then(function(response) {
          return response.json();
      })

      .then(function(data) {
        for(var i = 0; i < 6; i++) {
         
          
          //Style for market Boxes at top of screen
          var marketCard = document.querySelector('.market-card');
          

          var cardsCell = document.createElement('div');
          cardsCell.classList = 'card-cell cell'
          
          var card = document.createElement('div');
          card.classList = "cryptoCard card";

          var NandPRow = document.createElement('div')
          NandPRow.classList = 'row nameandpriceRow marketCard-row small-2 large-4 columns';
        
          var imgAndPchange = document.createElement('div')
          imgAndPchange.classList = 'row imgandpchange marketCard-row small-2 large-4 columns';

          var dateRow = document.createElement('div')
          dateRow.classList = 'row dateRow marketCard-row small-2 large-4 columns';

          
          marketCard.append(cardsCell) ;
          cardsCell.appendChild(card);
          card.append(NandPRow, imgAndPchange, dateRow);
         

          var name = document.createElement('h6');
          
          var price = document.createElement('p');
          

          var img = document.createElement('img');
          img.setAttribute('src', imgUrl);
          img.classList = 'marketimg';

          var priceChange = document.createElement('p');
          priceChange.classLIST = 'pricechanges';
          

          var date = document.createElement('p');

          var imgUrl = data[i].image;
          
      
          
          var currentPrice = data[i].current_price;
          var pChange = data[i].price_change_24h;
          var PercentageChange = data[i].price_change_percentage_24h;
          

          if(pChange <= 0) {
            card.style.backgroundColor = 'red'
          } else {
            card.style.backgroundColor = 'green'
          }

          name.textContent = data[i].name;
          price.textContent = '$ ' + currentPrice;
          priceChange.textContent = '$' + pChange.toFixed(2) + '(%' + PercentageChange.toFixed(2) + ')';
      
          
          
          NandPRow.append(name, price);
          imgAndPchange.append(img, priceChange);
          dateRow.append(date);





        }

        for(j =1; j < 10; j++) {
          //style for market at the left of the screen
          console.log(data[j])
         
          var cardSection = document.querySelector('.card-section');
          var row = document.createElement('div');
          row.classList = 'row market-mover-row';
          var symbolandpriceRow = document.createElement('div');
          symbolandpriceRow.classList = 'row SymbolandPricerow';
          var nameandchangeRow = document.createElement('div');
          nameandchangeRow.classList = 'row Name-Change-Row';
          row.classList = 'marketRow';
          


          var symbol = document.createElement('h5');
          symbol.textContent = data[j].symbol;
          var name = document.createElement('h6');
          name.textContent = data[j].name;
          var currentPrice = document.createElement('p');
          currentPrice.textContent = '$' + data[j].current_price.toFixed(3);
          var percentageChange = document.createElement('p');
          percentageChange.textContent = '$' + data[j].price_change_24h.toFixed(3) + '(' + data[j].price_change_percentage_24h + ')' + '%';
         
          
          cardSection.append(row);
          row.append(symbolandpriceRow, nameandchangeRow);
          symbolandpriceRow.append(symbol, currentPrice);
          nameandchangeRow.append(name, percentageChange);
          
        }
     
        })

}

getExchangeFeed()

