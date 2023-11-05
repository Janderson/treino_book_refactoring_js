/*
Steps

1. install lodash library
2. create function enrichReading 
3. modify client3 to use enrichReading
4. create a variable baseCharge and move calculation calculateBaseCharge
5. modify client3 to use new baseCharge Variable
6. modify client1 call enrichReading
7. modify client1 to use also baseCharge Variable
8. modify client2 call enrichReading
9. modify client2 to use also baseCharge Variable
10. move taxableCharge calculation inside enrichReading
11. modify client2 to use new taxableCharge of aReading

informations
enrich ==> produce same thing with additional
transform ==> produce something different

*/
const _ = require("lodash")
reading = {
    customer: "iva",
    quantity: 10,
    month: 5,
    year: 2017
}

function enrichReading(original){
    const result = _.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    result.taxableCharge = Math.max(0, result.baseCharge - taxThreshold(result.year));
    return result;
}

function acquireReading(){
    return reading;
}
function client1(){
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const baseCharge = aReading.baseCharge;
    return round_2places(baseCharge, 2);
}

function round_2places(num){
    return Math.round(num * 100)/100;
}

function client2(){
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const base = aReading.baseCharge;
    const taxableCharge = aReading.taxableCharge;
    return round_2places(taxableCharge);
}

function client3(){
    const rawReading = acquireReading();
    const aReading = enrichReading(rawReading);
    const basicChargeAmount = aReading.baseCharge;
    return round_2places(basicChargeAmount);
}

function baseRate(month, year){
    // make it up
    return ((year*1) + month**2)/100;
}

function taxThreshold(year){
    // make it up
    return year/100;
}

function calculateBaseCharge(aReading){
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
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

//run();
