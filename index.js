
function statement(invoice, plays){
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
            
                // print line for this order
                result+= ` ${play.name}: ${format(thisAmount/100)} (${perf.audience} seats)\n`
                totalAmount += thisAmount;
        }
    }
    return result;                                         
}

function loadFile(filename){
    console.log(`loading ${filename}`);
    const fs = require('fs');
    let rawdata = fs.readFileSync(filename);
    return JSON.parse(rawdata);
}

function exec(){
    console.log("start")
    let plays = loadFile('plays.json');
    console.log(plays);
    let invoices = loadFile('invoices.json');
    console.log(invoices);
    console.log("\n\n\n----------- STATEMENTS -----------\n");
    console.log(statement(invoices[0], plays));
}

exec()