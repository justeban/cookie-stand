'use strict';

// object {
//   max customer: 
//   min customers
//   avg cookies / customer
//   customers per hour = rand num
//   cookies purchased per hour = avg cookies purchased * rand number of customers generated
// }


var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSale: 6.3,
  custPerHr: function() {
    return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.avgCookiesPerSale * this.custPerHr();
  },
}

var seaTac = {
  minCust: 3,
  maxCust: 24, 
  avgCookiesPerSale: 1.2,
  custPerHr: function() {
    return Math.ceil(Math.random() * ((this.maxCust) - (this.minCust)) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.avgCookiesPerSale * this.custPerHr();
  }
}

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