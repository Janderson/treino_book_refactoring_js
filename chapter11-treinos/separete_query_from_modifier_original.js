var alarm = true;
function setOffAlarms(){
    // this functions dont exist on original code
    // I created to improce tests
    alarm = false;
    console.log(`setOffAlarms ${alarm}`);
}

function resetAlarms(){
    // this functions dont exist on original code
    // I created to improce tests
    alarm = true;
}

function alertForMiscreant (people){
    resetAlarms();
    for (const p of people){
        if (p === "Don"){
            setOffAlarms();
            return "Don";
        }
        if (p === "John"){
            setOffAlarms();
            return "John";
        }
    }
    return "";
}


function test1(){
    var assert = require("assert");
    people = ["Don"]
    assert.equal(alertForMiscreant(people), "Don")
    assert.equal(alarm, false);
}

function test2(){
    var assert = require("assert");
    people = ["Maria"]
    assert.equal(alertForMiscreant(people), "")
    assert.equal(alarm, true);
}

function test3(){
    var assert = require("assert");
    people = ["John"]
    assert.equal(alertForMiscreant(people), "John")
    assert.equal(alarm, false);
}

test1()
test2()
test3()