// old functions
const sMessg = async () => {
    let messageBox = document.querySelectorAll("[contenteditable='true']")[1];
    //message = selectMessage(usrName);
    let message = "message number: " + String(_i);
    //_i++;
    // pack of number of times to send the message;
    let counter = 5;
    for(let n = 0; n < counter; n++){
        let ev = document.createEvent("UIEvent");
        message = "message number: " + String(_i);
        messageBox.innerHTML = message.replace(/ /gm, '');
        _i++;
        ev.initUIEvent;
        ev.initUIEvent('input', true, true, window, 1);
        messageBox.dispatchEvent(ev);
        evFire(document.querySelector('span[data-icon="send"]'), 'click');
        await sleep(10000);
    }
}
const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}