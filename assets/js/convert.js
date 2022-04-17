const getBtcData = async () => {
  fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,DOGE&tsyms=USD")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      document.getElementById("current").innerHTML = "Current BTC price: $" + data.USD + " USD";
      return (price = data.USD);
    });
};

getBtcData();
tcount = setInterval(function () {
  tcount++;
  if (tcount == 10) {
    getBtcData();
    tcount = 0;
  }
}, 1000);

function takeInput() {
  var amount = document.getElementById("usd").value;
  var convertedPrice = amount / price;
  // console.log(convertedPrice);
  document.getElementById("bitcoin").innerHTML = "$" + amount + " is equal to " + convertedPrice + " in Bitcoin";
}
