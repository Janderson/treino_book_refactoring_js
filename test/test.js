var assert = require("assert");
var statement = require("../index")
var fs = require("fs")


describe("example test like show in https://mochajs.org/", function (){
    it("should be green", function (){
        assert.equal([1,2,3].indexOf(4), -1);
    });
});


describe("test like a suppose mr. Martin do into book pg 5", function(){
    it("test call statement", function (){
        let expected = fs.readFileSync("test/test_expected_result.json");;
        let result = statement();

        assert.equal(expected, result);
    })
})