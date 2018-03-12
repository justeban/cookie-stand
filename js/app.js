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
  custPerHr: function() {
    return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
  },
  cookiesPerHour: function() {
    return Math.round(this.avgCookiesPerSale * this.custPerHr());
  },
  showCookieData: function() {
    var pikeDataList = document.getElementById('pike_totals');

    for(var i = 0; i < operationTime.length; i++){
      var hourEl = document.createElement('li');
          hourEl.textContent = operationTime[i] + ': ' + this.cookiesPerHour();

          pikeDataList.appendChild(hourEl);
    }
  }
}

firstAndPike.showCookieData(); // Invoking function to build list

var seaTac = { // SeaTac Location
  minCust: 3,
  maxCust: 24, 
  avgCookiesPerSale: 1.2,
  custPerHr: function() {
    return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
  },
  cookiesPerHour: function() {
    return Math.round(this.avgCookiesPerSale * this.custPerHr());
  },
  showCookieData: function() {
    var seaTacDataList = document.getElementById('seatac_totals');

    for (var i = 0; i < operationTime.length; i++) {
      var hourEl = document.createElement('li');
          hourEl.textContent = operationTime[i] + ': ' + this.cookiesPerHour();
          
          seaTacDataList.appendChild(hourEl);
    }
  }
}

seaTac.showCookieData();

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiesPerSale: 3.7,
  custPerHr: function() {
    return Math.ceil(Math.random() * ((this.maxCust) -(this.minCust)) + this.minCust); 
  },
  cookiesPerHr: function() {
    return this.avgCookiesPerSale * this.custPerHr();
  }
}

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiesPerSale: 2.3,
  custPerHr: function () {
    return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
  },
  cookiesPerHour: function () {
    return this.avgCookiesPerSale * this.custPerHr();
  }
}

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookiesPerSale: 4.6,
  custPerHr: function () {
    return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
  },
  cookiesPerHour: function () {
    return this.avgCookiesPerSale * this.custPerHr();
  }
}

