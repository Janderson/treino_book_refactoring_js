/*
## Treino 3 - SPLIT PHASE

1. extract function, second phase of code, new function ==> applyShipping [OK]
2. create a itermidiate datastructure priceData [OK]
3. move basePrice to priceData [OK]
4. remove parameter basePrice of applyShipping [OK]
5. repeat step 3+4 to discount [OK]
6. repeat step 3+4 to quantity [OK]

7. create own function calculatePriceData
8. move logic to generate priceData to calculatePriceData
9. remove old logic from priceOrder method

*/

function priceOrder(product, quantity, shippingMethod){
    const priceData = calculatePriceData(product, quantity);
    return applyShipping(shippingMethod, priceData);
}

function applyShipping(shippingMethod, priceData){
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
}

function calculatePriceData(product, quantity){
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) 
        * product.basePrice * product.discountRate;
    return {
        basePrice: basePrice,
        discount: discount,
        quantity: quantity
    };
}

function test1(){
    var assert = require("assert");
    product = {"basePrice": 12, "discountThreshold": 5, "discountRate": 1}
    quantity = 12;
    shippingMethod = {
        "discountThreshold": 1,
        "feePerCase": 1,
        "discountedFee": 1
    }
    assert.equal(priceOrder(product, quantity, shippingMethod), 72)
    console.log("test1 OK")
}

test1()
