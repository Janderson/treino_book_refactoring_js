

function statement(invoice, plays){
    let totalAmount = 0;
    let result = `Statement for ${invoice.customer}\n`;
    for (let perf of invoice.performances){
        // print line for this order
        result+= ` ${PlayFor(plays, perf).name}: ${usd(AmountFor(plays, perf)/100)} (${perf.audience} seats)\n`
        totalAmount += AmountFor(plays, perf);
    }

    let volumeCredits = 0;
    for (let perf of invoice.performances){
        volumeCredits+= volumeCreditsFor(plays, perf)
    }
    result += `Amount owed is ${usd(totalAmount/100)}\n`
    result += `You earned ${volumeCredits} credits\n`
    return result;                                         
}

function PlayFor(plays, aPerformance) {
    return plays[aPerformance.playID];
}

function AmountFor(plays, aPerformance){
    let result = 0;
    switch(PlayFor(plays, aPerformance).type){
        case "tragedy":
            result = 40000;
            if (aPerformance.audience > 30){
                result += 1000 * (aPerformance.audience - 30);
            }
            break;
        
        case "comedy":
            result = 30000;
            if (aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result+= 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`unknow type ${PlayFor(plays, aPerformance).type}`);
    }
    return result;
}

function volumeCreditsFor(plays, aPerformance){
    let result = Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === PlayFor(plays, aPerformance).type) {
        result += Math.floor(aPerformance.audience / 5);
    }
    return result;
}

function usd(aNumber) {
    params = {style: "currency", 
              currency: "USD", 
              MinimumFractionDigits: 2}
    return new Intl.NumberFormat("en-US", params).format(aNumber);
}

function loadFile(filename){
    const fs = require('fs');
    console.log(`loading ${filename}`);
    let rawdata = fs.readFileSync(filename);
    return JSON.parse(rawdata);
}

function exec(){
    let plays = loadFile('plays.json');
    let invoices = loadFile('invoices.json');
    return statement(invoices[0], plays);
}

// function exported to test
module.exports = () => {return exec()}

function printExec(){

    console.log("\n\n\n----------- STATEMENTS -----------\n");
    console.log(exec())
}

printExec()


