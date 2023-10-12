const station = {
    name: "ZB1",
    readings: [
        {temp: 47, time: "2016-11-10 09:10"},
        {temp: 53, time: "2016-11-10 09:20"},
        {temp: 58, time: "2016-11-10 09:30"},
        {temp: 53, time: "2016-11-10 09:40"},
        {temp: 51, time: "2016-11-10 09:50"},
    ]
}

function readingsOutsideRange(station, min, max){
    return station.readings
        .filter(r => r.temp < min || r.temp > max);
}

// run === caller
function run(operationPlan){
    alerts = readingsOutsideRange(station,
                                  operationPlan.tempertureFloor,
                                  operationPlan.tempertureCeiling);
    return alerts;
}


function test1(){
    var assert = require("assert");
    // GIVEN

    const operationPlan = {
        tempertureFloor: 40,
        tempertureCeiling: 55
    }
    expected_result = [
        {temp: 58, time: '2016-11-10 09:30'}
    ]
    //debugger + node inspect;
    assert.deepEqual(run(operationPlan), expected_result);
    console.log("test1 introduce_parameter_object - OK");
}

function test2(){
    var assert = require("assert");
    // GIVEN
    const operationPlan = {
        tempertureFloor: 40,
        tempertureCeiling: 52
    }
    expected_result = [
        { temp: 53, time: '2016-11-10 09:20' },
        { temp: 58, time: '2016-11-10 09:30' },
        { temp: 53, time: '2016-11-10 09:40' }
    ]
    //debugger + node inspect;

    // WHEN
    observed_result = run(operationPlan)

    // THEN
    assert.deepEqual(observed_result, expected_result);
    console.log("test2 introduce_parameter_object - OK");
}

function test3(){
    var assert = require("assert");
    // GIVEN
    const operationPlan = {
        tempertureFloor: 48,
        tempertureCeiling: 58
    }
    expected_result = [
        { temp: 47, time: '2016-11-10 09:10' }
    ]
    //debugger + node inspect;

    // WHEN
    observed_result = run(operationPlan)

    // THEN
    assert.deepEqual(observed_result, expected_result);
    console.log("test3 introduce_parameter_object - OK");
}


test1();
test2();
test3();