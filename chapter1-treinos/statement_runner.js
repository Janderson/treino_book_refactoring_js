

function PrintStatement(invoice, plays){
    let totalAmount = 0;
    let volumeCredits = 0;
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-US", 
                                         {style: "currency", currency: "USD", MinimumFractionDigits: 2}).format;
    for (let perf of invoice.performances){
        const play = plays[perf.playID];
        let thisAmount = 0;

        switch(play.type){
            case "tragedy":
                thisAmount = 40000;
                if (perf.audience > 30){
                    thisAmount += 1000 * (perf.audience - 30);
                }
                break;
            
            case "comedy":
                thisAmount = 30000;
                if (perf.audience > 20) {
                    thisAmount += 10000 + 500 * (perf.audience - 20);
                }
                thisAmount+= 300 * perf.audience;
                break;
            default:
                throw new Error(`unknow type ${play.type}`);
        }

        // add volume credits
        volumeCredits += Math.max(perf.audience - 30, 0);
        // add extra credit for every ten comedy attendees
        if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

        // print line for this order
        result+= ` ${play.name}: ${format(thisAmount/100)} (${perf.audience} seats)\n`
        totalAmount += thisAmount;
    }
    result += `Amount owed is ${format(totalAmount/100)}\n`
    result += `You earned ${volumeCredits} credits\n`
    return result;                                         
}

function loadFile(filename){
    console.log(`loading ${filename}`);
    const fs = require('fs');
    let rawdata = fs.readFileSync(filename);
    return JSON.parse(rawdata);
}

function exec(){
    let plays = loadFile('plays.json');
    let invoices = loadFile('invoices.json');
    return PrintStatement(invoices[0], plays);
}

// function exported to test
module.exports = () => {return exec()}

function printExec(){

    console.log("\n\n\n----------- STATEMENTS -----------\n");
    console.log(exec())
}

printExec()


