export const WS_URL = "wss://fep-app.herokuapp.com/";
export const socket = new WebSocket(WS_URL);
export const API = {
  start: () => {
    socket.onopen = () => {
      console.log("Socket onopened");
    };
  },
  getMsg: (message) => {
    return JSON.parse(message.data);
  },
  sendMsg: ($nameInput, $msgInput) => {
    socket.send(
      JSON.stringify({
        type: "message",
        payload: {
          username: $nameInput.val(),
          message: $msgInput.val(),
        },
      })
    );
  },
  close: () => {
    socket.onclose = () => {
      console.log("Socket onclosed");
    };
  },
};
