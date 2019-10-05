import Jabami from "../../libs/Client";
import Command from "../../utils/Command";
import { Message } from "eris";

export default class PingCommand extends Command {
    public constructor() {
        super({
            name: "Ping",
            description: "Ping-Pong command",
            usage: ["ping", "pong"],
            aliases: ["pong"],
            cooldown: 10
        });
    }

    public async run(msg: Message, args: string[], client: Jabami) {
        let start: number = Date.now();
        msg.channel.createMessage(`:ping_pong:`).then(m => {
            m.delete();
            let different: string = (Date.now() - start).toLocaleString();
            msg.channel.createMessage(`Pong, the latency is \`${different}ms\``);
        });
    }
}