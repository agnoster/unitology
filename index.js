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
  })

module.exports = unit
