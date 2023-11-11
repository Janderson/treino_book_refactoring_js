/*
Steps

1. install lodash library [OK]
2. create function enrichReading [OK]
3. modify client3 to use enrichReading [OK]
4. create a variable baseCharge and move calculation calculateBaseCharge [OK]
5. modify client3 to use new baseCharge Variable [OK]
6. modify client1 call enrichReading [OK]
7. modify client1 to use also baseCharge Variable [OK]
8. modify client2 call enrichReading [OK]
9. modify client2 to use also baseCharge Variable [OK]
10. move taxableCharge calculation inside enrichReading  [OK]
11. modify client2 to use new taxableCharge of aReading [OK]

informations
enrich ==> produce same thing with additional
transform ==> produce something different

*/
loadsh = require("loadsh");

reading = {
    customer: "iva",
    quantity: 10,
    month: 5,
    year: 2017
}

function acquireReading(){
    return reading;
}

function enrichReading(raw_reading){
    aReading = loadsh.cloneDeep(raw_reading);
    aReading.baseCharge = round_2places(calculateBaseCharge(aReading));
    aReading.taxableCharge = round_2places(Math.max(0, aReading.baseCharge - taxThreshold(aReading.year)));
    return aReading;
}

function calculateBaseCharge(aReading){
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function client1(){
    const raw_reading = acquireReading();
    aReading = enrichReading(raw_reading);
    return aReading.baseCharge;
}

function round_2places(num){
    return Math.round(num * 100)/100;
}

function client2(){
    const raw_reading = acquireReading();
    const aReading = enrichReading(raw_reading);
    return aReading.taxableCharge;
}

function baseRate(month, year){
    // make it up
    return ((year*1) + month**2)/100;
}

function taxThreshold(year){
    // make it up
    return year/100;
}

function client3(){
    const raw_reading = acquireReading();
    aReading = enrichReading(raw_reading);
    return aReading.baseCharge;
}

function run(){
    client1();
    client2();
    client3();
}

function test1_1(){
    var assert = require("assert");
    assert.equal(client1(), 204.2)
    console.log("combine_function_into_transform test1_1 - OK")
}

function test1_2(){
    var assert = require("assert");
    function fake_reading(){
        return {
            customer: "iva",
            quantity: 10,
            month: 5,
            year: 2020
        }
    }
    assert.equal(client1(fake_reading), 204.2)
    assert.equal(client3(fake_reading), 204.2)
    console.log("combine_function_into_transform test1_2 - OK")
}

function test2_1(){
    var assert = require("assert");
    assert.equal(client2(), 184.03)
    console.log("combine_function_into_transform test2_1 - OK")
}

function test3_1(){
    var assert = require("assert");
    assert.equal(client3(), 204.2)
    console.log("combine_function_into_transform test3_1 - OK")
}


test1_1()
test1_2()
test2_1()
test3_1()

run();
