import { log } from "console";
import { AllHandlers, NCWebsocket, Structs } from "node-napcat-ts";
import { Plugin } from "./plugins/plugin";
import { ASACheckIn } from "./plugins/simple/ASACheckIn";
const napcat = new NCWebsocket({
  baseUrl: 'ws://127.0.0.1:3001',
  accessToken: 'tianqing',
  // 是否需要在触发 socket.error 时抛出错误, 默认关闭
  throwPromise: true,
  // ↓ 自动重连(可选)
  reconnection: {
    enable: true,
    attempts: 10,
    delay: 5000
  }
}, false);
let a = new ASACheckIn();
napcat.on("message.group", CheckIn);
napcat.connect();
function CheckIn(context: AllHandlers["message.group"]) {
  let group_id = context.group_id;
  if (group_id != 641587541) return;
  log(context);
  napcat.send_group_msg({ group_id: context.group_id, message: [Structs.text(context.raw_message)] })
}