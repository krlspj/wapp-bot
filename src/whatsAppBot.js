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

const sMessg = () => {
    let messageBox = document.querySelectorAll("[contenteditable='true']")[1];
    //message = selectMessage(usrName);
    let message = "message number: " + String(_i);
    //_i++;
    // pack of number of times to send the message;
    let counter = 5;
    for(let n = 0; n < counter; n++){
        setTimeout(()=> {
        ev = document.createEvent("UIEvent");
        message = "message number: " + String(_i);
        messageBox.innerHTML = message.replace(/ /gm, '');
        _i++;
        ev.initUIEvent
        ev.initUIEvent('input', true, true, window, 1);
        messageBox.dispatchEvent(ev);
        evFire(document.querySelector('span[data-icon="send"]'), 'click');
        },5000);
    }
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

simulateMouseEvents(document.querySelector('[title="' + name + '"]'), 'mousedown');
