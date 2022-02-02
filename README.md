# Treino Book Refactoring

v1_original - Chapter 1 - pg.3

Refactoring useds

Extract Function (106)
Inline Variable (123)
Change Function Declaration (124)
Split Phase(154)
Replace Temp with Query(178)
Move Function (198)
Slide Statements (223)
Split Loop (227)
Replace Loop with Pipeline (231)


Chapter 1 - Steps

## The First Step in Refactoring - Add a test

### MyStep: install mocha
> yarn install mocha
> mkidr test (#NOTE-JJ: not work if is tests)
> code test/test.js

### MyStep: add to command
add to package.json 
  "scripts":{
    "test": "mocha"
  }

### MyStep: add a new test to test.js
var assert = require("assert")

describe("example test like show in https://mochajs.org/", function (){
    it("should be green", function (){
        assert.equal([1,2,3].indexOf(4), -1);
    });
});

### MyStep: add a test
not working, keep give me this error.
"
/home/janderson/desenv/treinos/treino_book_refactoring_js/test/test.js:3
import PrintStatement from "../index";
^^^^^^

SyntaxError: Cannot use import statement outside a module
"

resources: 
> https://www.digitalocean.com/community/tutorials/how-to-test-a-node-js-module-with-mocha-and-assert
> https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module
> https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha-testing-d0e0ea09f09d/ (here I got anwser)

### MyStep: add this to index.js
// function exported to test
module.exports = () => {return exec()}

change function exec() to only load files and return result


### MyStep: and add this test

var PrintStatement = require("../index")


describe("test like a suppose mr. Martin do into book pg 5", function(){
    it("test call PrintStatement", function (){
        let expected = "";
        let result = PrintStatement();
        assert.equal(expected, result);
        
    })
})

works but still have to get same return of function to test pass.

### MyStep: try save result to a file 
https://stackoverflow.com/questions/2496710/writing-files-in-node-js