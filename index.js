var unit = require('./unit')

unit.time = unit.define(
  's, second',
  { "ms, millisecond": "0.001s"
  , "m, min, minute": "60s"
  , "h, hr, hour": "60m"
  , "d, day": "24h"
  , "w, week": "7d"
  , "mo, month": "1/12y"
  , "y, year": "365d"
  , "decade": "10y"
  , "century": "100y"
  , "millennium, millennia": "100y"
  , "microsecond": "0.001ms"
  })

unit.weight = unit.mass = unit.define(
  'kg, kilo, kilogram',
  { "g, gram": "0.001kg"
  , "lb, pound": "0.453592kg"
  , "oz, ounce": "1/16 lb"
  })

unit.length = unit.distance = unit.define(
  'm, meter, metre', 
  { "ft, foot, feet": "0.3048m"
  , "yard": "3ft"
  , "inch": "1/12ft"
  , "mile": "5280ft"
  })

module.exports = unit
