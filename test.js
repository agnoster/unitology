var unit = require('./')
  , mocha = require('mocha')

testUnit = function(string) {
    unit.time(string).to('ms')
}

testCases = ".1s, 5h, 2.345233e-23y, 78d, 1/12 y".split(', ')
for (var i = 0; i < testCases.length; i++) {
    testUnit(testCases[i])
}

