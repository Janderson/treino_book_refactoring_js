let defaultOwner = {
    firstName: "Martin",
    lastName: "Fowler"}

function setDefaultValue(){
    defaultOwner = {
        firstName: "Martin",
        lastName: "Fowler"}    
}

function someModifier(){
    defaultOwner = {
        firstName: "Janderson",
        lastName: "Ferreira"}
}

function getterExample(){
    return defaultOwner;
}

function run(){
    setDefaultValue();
    console.log(getterExample());
    someModifier();
    console.log(getterExample());
}

function test1(){
    var assert = require("assert");
    assert.equal(getterExample().firstName, "Martin")
    assert.equal(getterExample().lastName, "Fowler")
    run();
    assert.equal(getterExample().firstName, "Janderson")
    assert.equal(getterExample().lastName, "Ferreira")
}

test1()