"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
const Command_1 = __importDefault(require("../../utils/Command"));
const EmbedBuilder_1 = __importDefault(require("../../utils/EmbedBuilder"));
class EvalCommand extends Command_1.default {
    constructor() {
        super({
            name: "Eval",
            description: "Hohohoho",
            usage: ["eval <some javascript code>"],
            aliases: ["ev"],
            cooldown: 0,
            owner: true
        });
    }
    async run(msg, args, client) {
        const jsInput = args.join(" ");
        const embed = new EmbedBuilder_1.default()
            .color("#F27272")
            .field('Input', `\`\`\`js\n${jsInput}\`\`\``);
        try {
            let evaled;
            if (jsInput.includes('token')) {
                evaled = "WRRRRRRRYYYYYYY!!!";
            }
            else {
                evaled = eval(jsInput);
            }
            if (typeof evaled !== 'string') {
                evaled = util_1.default.inspect(evaled, { depth: 0 });
            }
            let output = this.clean(evaled);
            if (output.length > 1024) {
                let haste = client.utils.postToHastebin(output);
                embed.field('Output', haste);
            }
            else {
                embed.field('Output', `\`\`\`js\n${output}\`\`\``);
            }
            msg.channel.createMessage({ embed: embed.sendable });
        }
        catch (e) {
            let error = this.clean(e);
            if (error.length > 1024) {
                let haste = client.utils.postToHastebin(error);
                embed.field('Error', haste);
            }
            else {
                embed.field('Error', `\`\`\`js\n${error}\`\`\``);
            }
            msg.channel.createMessage({ embed: embed.sendable });
        }
    }
    clean(text) {
        if (typeof text == "string")
            return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
}
exports.default = EvalCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9nZW5lcmFsL2V2YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxnREFBd0I7QUFHeEIsa0VBQTBDO0FBQzFDLDRFQUFvRDtBQUVwRCxNQUFxQixXQUFZLFNBQVEsaUJBQU87SUFDNUM7UUFDSSxLQUFLLENBQUM7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLFdBQVcsRUFBRSxVQUFVO1lBQ3ZCLEtBQUssRUFBRSxDQUFDLDZCQUE2QixDQUFDO1lBQ3RDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztZQUNmLFFBQVEsRUFBRSxDQUFDO1lBQ1gsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFZLEVBQUUsSUFBYyxFQUFFLE1BQWM7UUFDekQsTUFBTSxPQUFPLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLHNCQUFZLEVBQUU7YUFDL0IsS0FBSyxDQUFDLFNBQVMsQ0FBQzthQUNoQixLQUFLLENBQUMsT0FBTyxFQUFFLGFBQWEsT0FBTyxRQUFRLENBQUMsQ0FBQTtRQUU3QyxJQUFJO1lBQ0EsSUFBSSxNQUFXLENBQUM7WUFDaEIsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMzQixNQUFNLEdBQUcsb0JBQW9CLENBQUM7YUFDakM7aUJBQU07Z0JBQ0gsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtZQUNELElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFO2dCQUM1QixNQUFNLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMvQztZQUVELElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksRUFBRTtnQkFDdEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2hELEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNILEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGFBQWEsTUFBTSxRQUFRLENBQUMsQ0FBQzthQUN0RDtZQUNELEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3hEO1FBQUMsT0FBTSxDQUFDLEVBQUU7WUFDUCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDSCxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxhQUFhLEtBQUssUUFBUSxDQUFDLENBQUM7YUFDcEQ7WUFDRCxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN4RDtJQUNMLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBWTtRQUNyQixJQUFJLE9BQU8sSUFBSSxJQUFJLFFBQVE7WUFDdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7WUFFM0csT0FBTyxJQUFJLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBdkRELDhCQXVEQyJ9