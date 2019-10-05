"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../utils/Command"));
class PingCommand extends Command_1.default {
    constructor() {
        super({
            name: "Ping",
            description: "Ping-Pong command",
            usage: ["ping", "pong"],
            aliases: ["pong"],
            cooldown: 10
        });
    }
    async run(msg, args, client) {
        let start = Date.now();
        msg.channel.createMessage(`:ping_pong:`).then(m => {
            m.delete();
            let different = (Date.now() - start).toLocaleString();
            msg.channel.createMessage(`Pong, the latency is \`${different}ms\``);
        });
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9nZW5lcmFsL3BpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrRUFBMEM7QUFHMUMsTUFBcUIsV0FBWSxTQUFRLGlCQUFPO0lBQzVDO1FBQ0ksS0FBSyxDQUFDO1lBQ0YsSUFBSSxFQUFFLE1BQU07WUFDWixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7WUFDdkIsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBWSxFQUFFLElBQWMsRUFBRSxNQUFjO1FBQ3pELElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvQixHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDOUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1gsSUFBSSxTQUFTLEdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDOUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsMEJBQTBCLFNBQVMsTUFBTSxDQUFDLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFuQkQsOEJBbUJDIn0=