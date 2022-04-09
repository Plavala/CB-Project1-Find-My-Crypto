// function getNewsFeed() {
//     let apiKey = 'pub_63593b2385ad8c49c191c6dbb0bff2d7c9a8';
//     let apiUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=crypto&country=us&language=en`;
  
//     fetch(apiUrl)
//       .then(function(response) {
//         return response.json();
//       })
//       .then(function(data){
//           console.log(data);
//         })
// }

// getNewsFeed();


function getNewsFeed(){
    var API = 'pub_63593b2385ad8c49c191c6dbb0bff2d7c9a8'
    var url = 'https://newsdata.io/api/1/news?apikey=' + API + '&q=crypto&country=us&language=en'

    fetch(url)
      .then(function(response){
          return response.json()
      })
      .then(function(data){
          console.log(data)
      })
}

getNewsFeed();