let btn = document.querySelector("#refresh");
let bitcoinpriceDisp = document.querySelector("#bitcoin-price");
let priceDisp = document.querySelector("#etherium-price");
let currency = "USD";

btn.addEventListener("click", function() {
  let XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      let data = JSON.parse(XHR.responseText);
      let bitcoinPrice = data.bpi[currency].rate;
      bitcoinpriceDisp.innerText = bitcoinPrice + " " + currency;
    }
  };

  let url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  XHR.open("GET", url);
  XHR.send();
});
