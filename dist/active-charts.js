module.exports = {};
var DataTable = (function () {
    function DataTable() {
    }
    return DataTable;
}());
var ChartType;
(function (ChartType) {
    ChartType[ChartType["Unknown"] = 0] = "Unknown";
    ChartType[ChartType["Area"] = 1] = "Area";
    ChartType[ChartType["Bar"] = 2] = "Bar";
    ChartType[ChartType["Bubble"] = 3] = "Bubble";
    ChartType[ChartType["Candlestick"] = 4] = "Candlestick";
    ChartType[ChartType["Column"] = 5] = "Column";
    ChartType[ChartType["Combo"] = 6] = "Combo";
    ChartType[ChartType["Diff"] = 7] = "Diff";
    ChartType[ChartType["Donut"] = 8] = "Donut";
    ChartType[ChartType["Pie"] = 9] = "Pie";
    ChartType[ChartType["Gantt"] = 10] = "Gantt";
    ChartType[ChartType["Gauge"] = 11] = "Gauge";
    ChartType[ChartType["Geo"] = 12] = "Geo";
    ChartType[ChartType["Histogram"] = 13] = "Histogram";
    ChartType[ChartType["Line"] = 14] = "Line";
    ChartType[ChartType["Sankey"] = 15] = "Sankey";
    ChartType[ChartType["Scatter"] = 16] = "Scatter";
    ChartType[ChartType["Table"] = 17] = "Table";
    ChartType[ChartType["Timelines"] = 18] = "Timelines";
    ChartType[ChartType["Trandline"] = 19] = "Trandline";
    ChartType[ChartType["Waterfall"] = 20] = "Waterfall";
})(ChartType || (ChartType = {}));
var DataType;
(function (DataType) {
    DataType[DataType["Unknown"] = 0] = "Unknown";
    DataType[DataType["Csv"] = 1] = "Csv";
})(DataType || (DataType = {}));
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
// /**
//  * Module dependencies.
//  */
// import chai = require('chai');
// /**
//  * Globals
//  */
// var expect = chai.expect;
// /**
//  * Unit tests
//  */
// describe('User Model Unit Tests:', () => {
//     describe('2 + 4', () => {
//         it('should be 6', (done) => {
//             expect(2+4).to.equals(6);
//             done();
//         });
//         it('should not be 7', (done) => {
//             expect(2+4).to.not.equals(7);
//             done();
//         });
//     });
// });
// var expect = require('chai').expect;
// const vm = require('vm');
// var activeCharts = require('../dist/active-charts.js');
// console.log(activeCharts);
//     console.log(activeCharts);
// describe('active-charts', function(){
//     it('should work!', function(){
//         expect(true).to.be.true;
//     });
// });
// describe('csv-parser', function(){
//     it('should work!', function(){
//         var testData = `Year, Sales, Expenses
// 2004, 1000, 400
// 2005, 1170, 460
// 2006, 660,  1120
// 2007, 1030, 540`;
//         var csv = activeCharts.parseCsv(testData);
//         csvParser.
//         expect(csv).to.exist;
//     });
// });
