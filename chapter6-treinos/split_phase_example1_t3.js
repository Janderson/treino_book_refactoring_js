function priceOrder(product, quantity, shippingMethod){
    const priceData = calculatePriceData(product, quantity);
    return applyShipping(shippingMethod, priceData);
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

function applyShipping(shippingMethod, priceData){
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
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
}

test1()