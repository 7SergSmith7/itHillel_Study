import "../css/vendor/normalize.css";
import "../css/vendor/skeleton.css";
import "../css/styles.css";
import { socket } from "./API";
import { API } from "./API";

$(() => {
  const $userName = $(".user-name");
  const $userMsg = $(".user-input");
  const $sendBtn = $(".sendMsg");
  const $chatContent = $(".chat-main");

  let now = new Date();

  API.start();

  $sendBtn.on("click", onSendBtnClick);

  socket.onmessage = (message) => {
    const newMsg = API.getMsg(message);
    $chatContent.append(getMsgTemplate(newMsg));
  };

  function getMsgTemplate(newMsg) {
    return ` <div class="msg" >${nowTime()} ${newMsg.payload.username} : ${
      newMsg.payload.message
    }</div>`;
  }

  function onSendBtnClick() {
    API.sendMsg($userName, $userMsg);
    $userMsg.val("");
  }

  function nowTime() {
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }
});
