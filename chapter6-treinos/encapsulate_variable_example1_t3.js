/*
## Drill - Encapsulate Variable - Steps
1. create getDefaultOwner + setDefaultOwner [OK]
2. modify setDefaultValue + someModifier to use setDefaultOwner [OK]
3. modify getterExample to use getDefaultOwner [OK]
4. create a default_owner_tX.js [OK]
5. COPY getDefaultOwner + setDefaultOwner + default_onwer data inside [OK]
6. make methods a module [OK]
7. modify setDefaultOwner + getDefaultOwner to default_owner module [OK]
7. remove setDefaultOwner+getDefaultOwner funcition and defaultOwner data of original file [OK]
*/

default_owner = require("./default_owner_t3.js");

function setDefaultValue(){
    default_owner.setDefaultOwner({
        firstName: "Martin",
        lastName: "Fowler"});
}

function someModifier(){
    default_owner.setDefaultOwner({
        firstName: "Janderson",
        lastName: "Ferreira"
    })
}

function getterExample(){
    return default_owner.getDefaultOwner();
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