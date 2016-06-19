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

var expect = chai.expect;

describe('1st tests', () => {
  it('true is true', () => expect(true).to.equals(true));
});
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

