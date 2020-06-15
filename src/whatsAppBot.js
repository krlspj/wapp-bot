"use strict";
/**
 * Add this code in the console of ur browser, then configure the params
*/
let name = prompt("Type group/user name:");
let _i = 0;

const simulateMouseEvents = (elem, evName) => {
    let mouseEvent = document.createEvent('MouseEvent');
    mouseEvent.initEvent(evName, true, true);
    elem.dispatchEvent(mouseEvent);
}
const startMessaging = (interval = 4000) => {
    setTimeout(sMessg,interval);
}
const evFire = (elem, elemType) => {
    let myEvent = document.createEvent("MouseEvent");
    myEvent.initMouseEvent(elemType,
                true, true, window, 0, 0, 0, 0, 0,
                false, false, false, false, 0, null);
    elem.dispatchEvent(myEvent);
}


const sMessg = (textMessg = `message nº:" + ${_i}`) => {
    let messageBox = document.querySelectorAll("[contenteditable='true']")[1];
    //let message = selectMessage(usrName);

    let message = textMessg;
    let ev = document.createEvent("UIEvent");
   // message = "message number: " + String(_i);
    messageBox.innerHTML = message.replace(/ /gm, '');
    ev.initUIEvent;
    ev.initUIEvent('input', true, true, window, 1);
    messageBox.dispatchEvent(ev);
    evFire(document.querySelector('span[data-icon="send"]'), 'click');
    _i++;
}

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const selectMessage = (usr) => {
    lowCaseUser = usr.lowCaseUser;
    switch(usr){
        case "vilaseca":
            break;
        case "gorro":
            break;
        default:
            return "message"
    }
}

async function repSendMess(n){
    for(let i = 0; i < n; i++){
        let message = `vilaseca ojete calor ${i} `; 
        sMessg(message);
        await sleep(5000);
    }
}

const mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      console.log(mutation);
    });
});

// class from messages list container div -> z_tTQ
// Starts listening for changes in the root HTML element of the page.

let messListDiv = document.querySelector(".z_tTQ");
mutationObserver.observe(messListDiv, {
    //attributes: true,
    //characterData: true,
    childList: true
    //subtree: true,
    //attributeOldValue: true,
    //characterDataOldValue: true
});
// to stop listener
//mutationObserver.disconnect();

simulateMouseEvents(document.querySelector('[title="' + name + '"]'), 'mousedown');
