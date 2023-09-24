function priceOrder(product, quantity, shippingMethod){
    const priceData = calculatePricingData(product, quantity);
    return applyShipping(priceData, shippingMethod);
}

function calculatePricingData(product, quantity){
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) 
        * product.basePrice * product.discountRate;
    return {
        basePrice: basePrice,
        quantity: quantity,
        discount: discount
    };
}
function applyShipping(priceData,  shippingMethod){
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold) 
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
}

var assert = require("assert");

function test1(){
    product = {"basePrice": 12, "discountThreshold": 5, "discountRate": 1}
    quantity = 12;
    shippingMethod = {
        "discountThreshold": 1,
        "feePerCase": 1,
        "discountedFee": 1
    }
    assert.equal(priceOrder(product, quantity, shippingMethod), 72)
}

test1()