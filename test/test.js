var assert = require("assert");
var PrintStatement = require("../index")


describe("example test like show in https://mochajs.org/", function (){
    it("should be green", function (){
        assert.equal([1,2,3].indexOf(4), -1);
    });
});


describe("test like a suppose mr. Martin do into book pg 5", function(){
    it("test call PrintStatement", function (){
        let expected = "";
        let result = PrintStatement();
        assert.equal(expected, result);
        
    })
})