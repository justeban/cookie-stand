'use strict';

var operationTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allShops = [];

var cookiesTable = document.getElementById('cookies-sold');

var cookieShopForm = document.getElementById('add-shop-form');

function CookieShop(location, minCust, maxCust, cookiesPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.cookiesSoldPerHr = [];
  allShops.push(this);

}

CookieShop.prototype.custPerHr = function () {
  return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
};

CookieShop.prototype.cookiesPerHr = function () {
  return Math.round(this.cookiesPerSale * this.custPerHr());
};

CookieShop.prototype.render = function() { // Render Function
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = this.location;
  trElement.appendChild(thElement);

  var cookiesSold = 0;
  var totalCookiesSold = 0;

  for (var i = 0; i < operationTime.length; i++) {

    cookiesSold = this.cookiesPerHr();

    var tdElement = document.createElement('td');
    tdElement.textContent = cookiesSold;
    trElement.appendChild(tdElement);

    this.cookiesSoldPerHr.push(cookiesSold);

    totalCookiesSold += cookiesSold;
  }

  tdElement = document.createElement('td');
  tdElement.textContent = totalCookiesSold;
  trElement.appendChild(tdElement);
  cookiesTable.appendChild(trElement);
};

function makeHeaderRow() { // Header Row Function
  var theadElement = document.createElement('thead');
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = '';
  trElement.appendChild(thElement);

  for (var i = 0; i < operationTime.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = operationTime[i];
    trElement.appendChild(thElement);
  }

  thElement = document.createElement('th');
  thElement.textContent = 'Daily Location Totals';
  trElement.appendChild(thElement);
  theadElement.appendChild(trElement);

  cookiesTable.appendChild(theadElement);
}

function totalCookiesPerHour() { // Bottom Totals
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Hourly Cookie Totals';
  trElement.appendChild(thElement);

  var grandTotalCookies = 0;

  for (var i = 0; i < operationTime.length; i++) {
    var totalCookies = 0;
    for( var j = 0; j < allShops.length; j++) {
      totalCookies += allShops[j].cookiesSoldPerHr[i];
      grandTotalCookies += allShops[j].cookiesSoldPerHr[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = totalCookies;
    trElement.appendChild(tdElement);

  }
  tdElement = document.createElement('td');
  tdElement.textContent = grandTotalCookies;
  trElement.appendChild(tdElement);
  cookiesTable.appendChild(trElement);
}

new CookieShop('First and Pike', 23, 65, 6.3);
new CookieShop('SeaTac', 3, 24, 1.2);
new CookieShop('Seattle Center', 11, 38, 3.7);
new CookieShop('Capitol Hill', 20, 38, 2.3);
new CookieShop('Alki', 2, 16, 4.6);

function renderAllShops() {
  for(var i in allShops) {
    allShops[i].render();
  }
}
// event listener's callback funtion
function addNewShop(event) {
  event.preventDefault();
  console.log(event);
  console.log(event.target);
  console.log(event.target.shopLocation);
  console.log(event.target.shopLocation.value);
  var newLoc = event.target.shopLocation.value;
  var newMinCust = parseInt(event.target.minCust.value);
  var newMaxCust = parseInt(event.target.maxCust.value);
  var newCookiesPerSale = parseInt(event.target.cookiesPerSale.value);

  new CookieShop(newLoc, newMinCust, newMaxCust, newCookiesPerSale);

  cookiesTable.innerHTML = '';
  makeHeaderRow();
  renderAllShops();
  totalCookiesPerHour();
}

cookieShopForm.addEventListener('submit', addNewShop);

makeHeaderRow();
renderAllShops();
totalCookiesPerHour();
