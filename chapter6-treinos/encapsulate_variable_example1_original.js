/*
## Drill - Encapsulate Variable - Steps
1. create getDefaultOwner + setDefaultOwner ()
2. modify setDefaultValue + someModifier to use setDefaultOwner ()
3. modify getterExample to use getDefaultOwner
4. create a default_owner_tX.js 
5. COPY getDefaultOwner + setDefaultOwner + default_onwer data inside
6. make methods a module
7. modify setDefaultOwner to default_owner module
7. remove setDefaultOwner of original file
7. modify getDefaultOwner to default_owner module
7. remove getDefaultOwner+defaultOwner of original file
*/


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