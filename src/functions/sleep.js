"use strict";
/** First aproach of sleep function */

const sleep0 = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

console.log("Hello");
sleep0(2000);
console.log("World!");

console.log('='.repeat(20));

// Promises aproach
function sleep1(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
console.log("Hello");
sleep1(2000)
    .then(() => { console.log("World!"); })
    .then(() => {
    sleep1(2000)
        .then(() => { console.log("Goodbye!"); })
        .then(() => {console.log('='.repeat(20));})
    }); 

const sleep2 = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    
async function delayedGreeting() {
    console.log("Hello");
    await sleep2(2000);
    console.log("World!");
    await sleep2(2000);
    console.log("Goodbye!");
}
    
delayedGreeting();
