default_owner = require("./defaultOwner_t1")

let defaultOwner = {
    firstName: "Martin",
    lastName: "Fowler"}

function getDefaultOwner(){
    return defaultOwner;
};

function setDefaultValue(){
    default_owner.setDefaultOwner({
        firstName: "Martin",
        lastName: "Fowler"});
}

function someModifier(){
    default_owner.setDefaultOwner({
        firstName: "Janderson",
        lastName: "Ferreira"})
}

function getterExample(){
    return getDefaultOwner();
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