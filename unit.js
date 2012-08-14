var unitRE = new RegExp('^([+-]?[0-9]*[./]?[0-9]*(e[+-]?[0-9]+)?) *(.*)$')

var unit = {}
unit.define = function(baseUnit, conversions) {

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

    if (conversions) self.define(conversions)

    return self
}

function getUnit(string) {
    var match
    if (match = unitRE.exec(string)) {
        
        return { v: eval(match[1]), u: match[3] }
    }
}

module.exports = unit
