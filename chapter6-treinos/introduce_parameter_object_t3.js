/*

## Drill/Treino - Introduce Parameter Object - Steps
1. declaring a class to combine data [OK]
2. R:CHANGE FUNCTION DECLARATION -  add new object of Range + add null to caller [OK]
3. adjust caller to pass correct date range [ok]
4. replace usage of parameters. start maximum
5. replace usage of parameters. minimum
6. add a method for a range if value falls within the range (method: inside_range)
7. modify readingsOutsideRange to remove old parameters
*/


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

class NumberRange{
    constructor(min, max){
        this._data = {
            "min": min,
            "max": max
        }
    }
    get min() {return this._data.min}
    get max() {return this._data.max}
    inside_range(value){
        return (value >= this._data.min) && (value <= this._data.max);
    }
}

function readingsOutsideRange(station, range){
    return station.readings.filter(r => !range.inside_range(r.temp));
}

// run === caller
function run(operationPlan){
    const number_range = new NumberRange(operationPlan.tempertureFloor,
                                         operationPlan.tempertureCeiling)
    alerts = readingsOutsideRange(station,
                                  number_range);
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