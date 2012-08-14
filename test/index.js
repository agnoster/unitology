var should = require('should')
  , unit = require('../')

describe("Unitology", function() {

    describe("does conversions of", function() {

        describe("time", function() {

            tests =
            [ "12 months in years = 1"
            , "28 days in weeks = 4"
            , "3 days in hours = 72"
            , "10 years in seconds = 315360000"
            , "5m in ms = 300000"
            ]

            tests.forEach(function(test) {
                it(test, function() {

                    var match = test.match(/^(.*) in (.*) = (.*)$/)
                    should.exist(match)
                    unit.time(match[1]).to(match[2]).toString().should.eql(match[3])
                })
            })
        })

        describe("weight", function() {

            tests =
            [ "3 kg in oz = 105.82197216882132"
            , "5 pounds in grams = 2267.96"
            ]

            tests.forEach(function(test) {
                it(test, function() {

                    var match = test.match(/^(.*) in (.*) = (.*)$/)
                    should.exist(match)
                    unit.weight(match[1]).to(match[2]).toString().should.eql(match[3])
                })
            })
        })
        describe("distance", function() {

            tests =
            [ "1 mile in m = 1609.344"
            , "1 inch in m = 0.0254"
            ]

            tests.forEach(function(test) {
                it(test, function() {

                    var match = test.match(/^(.*) in (.*) = (.*)$/)
                    should.exist(match)
                    unit.distance(match[1]).to(match[2]).toString().should.eql(match[3])
                })
            })
        })
    })

    describe("parses and understands", function() {

        it(".1s", function() {
            unit.parse(".1s").should.eql({v: .1, u: 's'})
            unit.time(".1s")().should.eql(0.1)
        })
        it("5h", function() {
            unit.parse("5h").should.eql({v: 5, u: 'h'})
            unit.time("5h")().should.eql(18000)
        })
        it("2.345233e-23y", function() {
            unit.parse("2.345233e-23y").should.eql({v: 2.345233e-23, u: 'y'})
            unit.time("2.345233e-23y")().should.eql(7.395926788799999e-16)
        })
        it("78d", function() {
            unit.parse("78d").should.eql({v: 78, u: 'd'})
            unit.time("78d")().should.eql(6739200)
        })
        it("1/12y", function() {
            unit.parse("1/12y").should.eql({v: 1/12, u: 'y'})
            unit.time("1/12y")().should.eql(2628000)
        })
    })

    describe("can be extended by the user", function() {
        it("with new units", function() {

            unit.time.fortnight = "2 weeks"
            unit.time('1 year').to('fortnight').should.equal(26.071428571428573)
            unit.time('2 fortnights').to('days').should.equal(28)
        })
        it("with entire new measures", function() {

            unit.text = unit.define(
                'c, char, character, byte',
                { "tweet": "140 characters"
                , "kB, kilobytes": "1024 bytes"
                , "yegge": "4kB" // Source: http://yegge.urbanup.com/6190233
                , "bible": "4.5e6 characters"
                })
            unit.text('10 bibles').to('kB').should.equal(43945.3125)
            unit.text('yegge').to('tweets').should.equal(29.257142857142856)
        })
    })

})
