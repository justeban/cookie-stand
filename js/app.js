'use strict';

var operationTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// var firstAndPike = { // First and Pike Location
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesPerSale: 6.3,
//   totalCookies: 0,
//   cookiesSoldArray: [],
//   custPerHr: function() {
//     return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
//   },
//   cookiesPerHr: function() {
//     return Math.round(this.avgCookiesPerSale * this.custPerHr());
//   },
//   showCookieData: function() {

//     for (var i = 0; i < operationTime.length; i++){

//       this.cookiesSoldArray[i] = this.cookiesPerHr();

//       var hourEl = document.createElement('li');
//       hourEl.textContent = operationTime[i] + ': ' + this.cookiesSoldArray[i] + ' cookies';

//       var pikeDataList = document.getElementById('pike_totals');
//       pikeDataList.appendChild(hourEl);

//       this.totalCookies = this.cookiesSoldArray[i] + this.totalCookies;
//     }
//     var totalEl = document.createElement('li'); // Creating a cookie total element
//     totalEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
//     pikeDataList.appendChild(totalEl);
//   }
// };

var cookiesTable = document.getElementById('cookies-sold');

function CookieShop(location, minCust, maxCust, cookiesPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.cookiesSoldPerHr = [];
}

CookieShop.prototype.custPerHr = function () {
  return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
};

CookieShop.prototype.cookiesPerHr = function () {
  return Math.round(this.cookiesPerSale * this.custPerHr());
};

CookieShop.prototype.render = function() {
  // create tr
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = this.location;
  trElement.appendChild(tdElement);

  var cookiesSold = 0;
  var totalCookiesSold = 0;

  for (var i = 0; i < operationTime.length; i++) {

    cookiesSold = this.cookiesPerHr();

    tdElement = document.createElement('td');
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

var firstAndPike = new CookieShop('First and Pike', 23, 65, 6.3);
var seaTac = new CookieShop('SeaTac', 3, 24, 1.2);
var seattleCenter = new CookieShop('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieShop('Capitol Hill', 20, 38, 2.3);
var alki = new CookieShop('Alki', 2, 16, 4.6);

firstAndPike.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();


