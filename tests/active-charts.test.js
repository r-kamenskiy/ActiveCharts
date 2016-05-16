var expect = require('chai').expect;
const vm = require('vm');
var activeCharts = require('../dist/active-charts.js');

console.log(activeCharts);
    console.log(activeCharts);

describe('active-charts', function(){
    it('should work!', function(){
        expect(true).to.be.true;
    });
});

describe('csv-parser', function(){
    it('should work!', function(){
        var testData = `Year, Sales, Expenses
2004, 1000, 400
2005, 1170, 460
2006, 660,  1120
2007, 1030, 540`;
        var csv = activeCharts.parseCsv(testData);
        csvParser.
        expect(csv).to.exist;
    });
});

