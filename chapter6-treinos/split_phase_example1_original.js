function priceOrder(product, quantity, shippingMethod){
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0) 
        * product.basePrice * product.discountRate;
    const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    
    const shippingCost = quantity * shippingPerCase;
    const price = basePrice - discount + shippingCost;
    return price;
}

var assert = require("assert");


product = {"basePrice": 12, "discountThreshold": 5, "discountRate": 1}
quantity = 12;
shippingMethod = {
    "discountThreshold": 1,
    "feePerCase": 1,
    "discountedFee": 1
}
assert.equal(priceOrder(product, quantity, shippingMethod), 72)
