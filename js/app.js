'use strict';

// object {
//   max customer: 
//   min customers
//   avg cookies / customer
//   customers per hour = rand num
//   cookies purchased per hour = avg cookies purchased * rand number of customers generated
// }

var operationTime = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = { // First and Pike Location
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSale: 6.3,
  totalCookies: 0,
  cookiesSoldArray: [],
  custPerHr: function() {
    return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
  },
  cookiesPerHr: function() {
    return Math.round(this.avgCookiesPerSale * this.custPerHr());
  },
  showCookieData: function() {

    for (var i = 0; i < operationTime.length; i++){
      
      this.cookiesSoldArray[i] = this.cookiesPerHr();

      var hourEl = document.createElement('li');
      hourEl.textContent = operationTime[i] + ': ' + this.cookiesSoldArray[i] + ' cookies';
      
      var pikeDataList = document.getElementById('pike_totals');    
      pikeDataList.appendChild(hourEl);

      this.totalCookies = this.cookiesSoldArray[i] + this.totalCookies;
    }
    var totalEl = document.createElement('li'); // Creating a cookie total element
    totalEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    pikeDataList.appendChild(totalEl);
  }
}

firstAndPike.showCookieData(); // Invoking function to build list

var seaTac = { // SeaTac Location
  minCust: 3,
  maxCust: 24, 
  avgCookiesPerSale: 1.2,
  totalCookies: 0,
  cookiesSoldArray: [],
  custPerHr: function() {
    return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
  },
  cookiesPerHr: function() {
    return Math.round(this.avgCookiesPerSale * this.custPerHr());
  },
  showCookieData: function() {

    for (var i = 0; i < operationTime.length; i++) {
      
      this.cookiesSoldArray[i] = this.cookiesPerHr();

      var hourEl = document.createElement('li');
      hourEl.textContent = operationTime[i] + ': ' + this.cookiesSoldArray[i] + ' cookies';
      
      var seaTacDataList = document.getElementById('seatac_totals');    
      seaTacDataList.appendChild(hourEl);

      this.totalCookies = this.cookiesSoldArray[i] + this.totalCookies;
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    seaTacDataList.appendChild(totalEl);
  }
}

seaTac.showCookieData();

var seattleCenter = { // Seattle Center Location
  minCust: 11,
  maxCust: 38,
  avgCookiesPerSale: 3.7,
  totalCookies: 0,
  cookiesSoldArray: [],
  custPerHr: function() {
    return Math.ceil(Math.random() * ((this.maxCust) -(this.minCust)) + this.minCust); 
  },
  cookiesPerHr: function() {
    return Math.round(this.avgCookiesPerSale * this.custPerHr());
  },
  showCookieData: function() {

    for (var i = 0; i < operationTime.length; i++) {
      
      this.cookiesSoldArray[i] = this.cookiesPerHr();

      var hourEl = document.createElement('li');
      hourEl.textContent = operationTime[i] + ': ' + this.cookiesSoldArray[i] + ' cookies';
      
      var seattleCenterDataList = document.getElementById('center_totals');
      seattleCenterDataList.appendChild(hourEl);

      this.totalCookies = this.cookiesSoldArray[i] + this.totalCookies;
    }
    var totalEl = document.createElement('li');
    totalEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    seattleCenterDataList.appendChild(totalEl);
  }
}

seattleCenter.showCookieData();

var capitolHill = { // Capitol Hill Location
  minCust: 20,
  maxCust: 38,
  avgCookiesPerSale: 2.3,
  custPerHr: function () {
    return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
  },
  cookiesPerHr: function () {
    return Math.round(this.avgCookiesPerSale * this.custPerHr());
  },
  showCookieData: function() {
    var capitolHillDataList = document.getElementById('capitolhill_totals');

    for (var i = 0; i < operationTime.length; i++) {
      var hourEl = document.createElement('li');
          hourEl.textContent = operationTime[i] + ': ' + this.cookiesPerHr() + ' cookies';

          capitolHillDataList.appendChild(hourEl);
    }
  }
}

capitolHill.showCookieData();

var alki = { // Alki location
  minCust: 2,
  maxCust: 16,
  avgCookiesPerSale: 4.6,
  custPerHr: function () {
    return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
  },
  cookiesPerHr: function () {
    return Math.round(this.avgCookiesPerSale * this.custPerHr());
  },
  showCookieData: function() {
    var alkiDataList = document.getElementById('alki_totals');
    
    for (var i = 0; i < operationTime.length; i++) {
      var hourEl = document.createElement('li');
          hourEl.textContent = operationTime[i] + ': ' + this.cookiesPerHr() + ' cookies';

          alkiDataList.appendChild(hourEl);
    }
  }
}

alki.showCookieData();


