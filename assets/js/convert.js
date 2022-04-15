
$(".currencyField").keyup(function () {

  let convFrom;
  if ($(this).prop("name") == "btc") {
    convFrom = "btc";
    convTo = "usd";
  } else {
    convFrom = "usd";
    convTo = "btc";
  }
  $.getJSON("https://api.coingecko.com/api/v3/simple/price?ids=BTC&vs_currencies=USD",
    function (data) {
      var origAmount = parseFloat($("input[name='" + convFrom + "']").val());
      var exchangeRate = parseInt(data.bpi.USD.rate_float);
      let amount;
      if (convFrom == "btc") amount = parseFloat(origAmount * exchangeRate);
      else amount = parseFloat(origAmount / exchangeRate);
      $("input[name='" + convTo + "']").val(amount.toFixed(2));
    }
  );
});
