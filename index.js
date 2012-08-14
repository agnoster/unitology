var unitRE = new RegExp('^([+-]?[0-9]*[./]?[0-9]*(e[+-]?[0-9]+)?) *(.*)$')

var unit = {}
unit.of = function(baseUnit) {

    var self = function(size) {
        var from, value = 1, u

        // convert down to base
        while (true) {
            from = getUnit(size)
            value *= from.v
            u = from.u

            if (u == baseUnit) break

            size = self[u]
            console.log(self, u)
            if (!size) throw ("No unit found for: '" + u + "'")
        }

        var boxed = function() { return value }
        
        boxed.to = function(units) {
            // convert up
            console.log("Convert", value, "to", units)
        }

        return boxed
    }

    self.define = function(units) {
        for (key in units) {
            if (units.hasOwnProperty(key)) self[key] = units[key]
        }
    }

    return self
}

function getUnit(string) {
    var match
    if (match = unitRE.exec(string)) {
        
        return { v: eval(match[1]), u: match[3] }
    }
}

unit.time = unit.of('s')
unit.time.define(
  { "ms": "0.001s"
  , "m": "60s"
  , "h": "60m"
  , "d": "24h"
  , "w": "7d"
  , "mo": "1/12y"
  , "y": "365d"
  }
);

module.exports = unit

testUnit = function(string) {
    unit.time(string).to('ms')
}

testCases = ".1s, 5h, 2.345233e-23y, 78d, 1/12 y".split(', ')
for (var i = 0; i < testCases.length; i++) {
    testUnit(testCases[i])
}

