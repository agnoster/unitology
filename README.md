# Unitology

Sometimes you just want to convert from one unit to another.

    unit = require('unitology')
    unit.time('5m').to('s') // -> 300
    unit.length('5m').to('inches') // -> 196.85
    unit.weight('5kg').to('pounds') -> 11.0231

Well, you get the idea. But what about custom conversions?

    unit.time.fortnight = "2 weeks"
    unit.time('1 year').to('fortnight') // -> 26.0887285
    unit.time('2 fortnights').to('days') // -> 28

Okay, so you can add a new unit to an existing type of measurement. What about totally new measures? 

    unit.volume = new unit('l')
    unit.volume.liter = "l"
    unit.volume.litre = "l"
    unit.volume.cc = "0.001l"
    unit.volume.equate({ "cubic meters": "1000l", "m3": "cubic meters" })

## TBD

How to convert units like temperature? More complex formula needed.

Maybe:
    
    unit.temp["K->C"] = function(k) { return k + 273 }
    unit.temp["C->K"] = function(c) { return c - 273 }

Or something?
