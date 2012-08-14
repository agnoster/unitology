var unit = require('./unit')

unit.time = unit.define('s',
  { "ms": "0.001s"
  , "m": "60s"
  , "h": "60m"
  , "d": "24h"
  , "w": "7d"
  , "mo": "1/12y"
  , "y": "365d"
  })

module.exports = unit
