# Unitology [![build status](https://secure.travis-ci.org/agnoster/unitology.png?branch=master)](http://travis-ci.org/agnoster/unitology)

Sometimes you just want to convert from one unit to another.

    unit = require('unitology')
    unit.time('5m').to('s') // -> 300
    unit.length('5m').to('inches') // -> 196.85
    unit.weight('5kg').to('pounds') -> 11.0231

Well, you get the idea. But what about custom conversions?

    unit.time.fortnight = '2 weeks'
    unit.time('1 year').to('fortnight') // -> 26.0887285
    unit.time('2 fortnights').to('days') // -> 28

Okay, so you can add a new unit to an existing type of measurement. What about totally new measures? 

    unit.volume = unit.define('l')
    unit.volume.liter = 'l'
    unit.volume.litre = 'l'
    unit.volume.cc = '0.001l'
    unit.volume.define({ 'cubic meters': '1000l', 'm3': 'cubic meters' })

Though it might be nicer, and more concise, to write this way:

    unit.volume = unit.define(
      'l, liter, litre',
      {
        cc: '0.001l',
        'cubic meters, m3': '1000l'
      }
    )

## TBD

How to convert units like temperature? More complex formula needed.

Maybe:
    
    unit.temp['K->C'] = function(k) { return k + 273 }
    unit.temp['C->K'] = function(c) { return c - 273 }

Or something?

## Contributing

I love forks, pull requests, and issues. Use Github, it's the bee's knees!

## MIT License

Copyright (C) 2012 by Isaac Wolkerstorfer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


