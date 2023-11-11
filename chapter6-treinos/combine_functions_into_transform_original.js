reading = {
    customer: "iva",
    quantity: 10,
    month: 5,
    year: 2017
}

function acquireReading(){
    return reading;
}
function client1(){
    const aReading = acquireReading();
    const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;
    return round_2places(baseCharge, 2);
}

function round_2places(num){
    return Math.round(num * 100)/100;
}

function client2(){
    const aReading = acquireReading();
    const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
    const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));
    return round_2places(taxableCharge);
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
    const aReading = acquireReading();
    const basicChargeAmount = calculateBaseCharge(aReading);
    return round_2places(basicChargeAmount);
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
