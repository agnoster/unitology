var unitRE = new RegExp('^([+-]?[0-9]*[./]?[0-9]*(e[+-]?[0-9]+)?) *(.*)$')

var unit = {}
unit.define = function(baseUnit, conversions) {

    var self = function(size) {
        var from, value = 1, u

        // convert down to base
        while (true) {
            from = unit.parse(size)
            value *= from.v
            u = from.u

            if (!u) break

            size = self[u]
            if (!size) size = self[u.replace(/s?$/, '')] // try singularizing
            if (!size) throw ("No unit found for: '" + u + "'")
        }

        var boxed = function(units) {
            if (units) return boxed.to(units)
            return value
        }
        
        boxed.to = function(target) {
            // convert up
            var multiplier = self(target)()
            return value / multiplier
        }

        return boxed
    }

    self.define = function(units, val) {
        if (typeof units === 'object') {
            for (key in units) {
                if (units.hasOwnProperty(key))
                    self.define(key, units[key])
            }
        } else {
            units = units.split(/\s*,\s*/)
            units.forEach(function(key) {
                self[key] = val
            })
        }
    }

    self.define(baseUnit, 1)

    if (conversions) self.define(conversions)

    return self
}

unit.parse = function (string) {
    var match
    if (match = unitRE.exec(string)) {
        
        return { v: eval(match[1] || 1), u: match[3] }
    }
}

module.exports = unit
