const wsUri = "ws://websocket.org/";
let websocket;


const init = () => {
    testWebSocket();
}

const testWebSocket = () => {
    websocket = new WebSocket(wsUri);
    // websocket.onopen = function(e) {onOpen(e)}

}

// const onOpen = (e: any) => {

// }

// const onClose = (e) => {

// }

// const onMessage= (e) => {
    
// }

// const onError = (e) => {
    
// }

// const doSend = (e) => {
    
// }

// const writeToScreen = (e) => {
    
// }
