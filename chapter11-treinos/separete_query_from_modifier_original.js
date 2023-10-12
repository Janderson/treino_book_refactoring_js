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

function run(people){
    alertForMiscreant(people);
}


function test1(){
    var assert = require("assert");
    people = ["Don"]
    run(people);
    assert.equal(alarm, false);
}

function test2(){
    var assert = require("assert");
    people = ["Maria"]
    run(people);
    assert.equal(alarm, true);
}

function test3(){
    var assert = require("assert");
    people = ["John"]
    run(people);
    assert.equal(alarm, false);
}

test1()
test2()
test3()