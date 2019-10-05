import { Message } from "eris";
import util from "util";

import Jabami from "../../libs/Client";
import Command from "../../utils/Command";
import EmbedBuilder from "../../utils/EmbedBuilder";

export default class EvalCommand extends Command {
    public constructor() {
        super({
            name: "Eval",
            description: "Hohohoho",
            usage: ["eval <some javascript code>"],
            aliases: ["ev"],
            cooldown: 0,
            owner: true
        });
    }

    public async run(msg: Message, args: string[], client: Jabami) {
        const jsInput: string = args.join(" ");
        const embed = new EmbedBuilder()
        .color("#F27272")
        .field('Input', `\`\`\`js\n${jsInput}\`\`\``)

        try {
            let evaled: any;
            if (jsInput.includes('token')) {
                evaled = "WRRRRRRRYYYYYYY!!!";
            } else {
                evaled = eval(jsInput);
            }
            if (typeof evaled !== 'string') {
                evaled = util.inspect(evaled, { depth: 0 });
            }

            let output: string = this.clean(evaled);
            if (output.length > 1024) {
                let haste = client.utils.postToHastebin(output);
                embed.field('Output', haste);
            } else {
                embed.field('Output', `\`\`\`js\n${output}\`\`\``);
            }
            msg.channel.createMessage({ embed: embed.sendable });
        } catch(e) {
            let error = this.clean(e);
            if (error.length > 1024) {
                let haste = client.utils.postToHastebin(error);
                embed.field('Error', haste);
            } else {
                embed.field('Error', `\`\`\`js\n${error}\`\`\``);
            }
            msg.channel.createMessage({ embed: embed.sendable });
        }
    }

    public clean(text: string): string {
        if (typeof text == "string") 
            return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
}