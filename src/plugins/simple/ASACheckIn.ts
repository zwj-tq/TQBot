import { AllHandlers, EventKey } from "node-napcat-ts";
import { Plugin } from "../plugin";

export class ASACheckIn extends Plugin {
    constructor() {
        super({
            name: "ASACheckIn",
            dsc: "方舟打卡",
            event: "message.private",
            handle: "CheckIn"
        });
    }

    CheckIn(context: AllHandlers[typeof this.event]) {
        console.log("1`1111111111111111");
    }
}
