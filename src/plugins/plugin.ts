import { AllHandlers, EventKey } from "node-napcat-ts";

export abstract class Plugin {
    name: string;       // 插件名称
    dsc: string;        // 插件描述
    event: EventKey;      // 监听的事件类型，比如 "message"
    handle: string
    constructor(config: { name: string; dsc: string; event: EventKey; handle: string }) {
        this.name = config.name;
        this.dsc = config.dsc;
        this.event = config.event;
        this.handle = config.handle;
    }
}