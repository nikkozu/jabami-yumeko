import Jabami from "../libs/Client";
import Command from "../utils/Command";
import { Message, Collection } from "eris";

const cooldowns: Map<string, Map<string, number>> = new Map();

export = async (client: Jabami, msg: Message) => {
    if (msg.author.bot || msg.channel.type == 1) return;

    let prefix: string = process.env.BOT_PREFIX;
    let args: string[] = msg.content.slice(prefix.length).trim().split(/ +/g);
    let command: string = args.shift().toLowerCase();
    let ownerID: string[] = process.env.OWNER_ID.split(' ');

    // reply if user mention the bot
    if (/<@(!?)(429346525412589568)>/g.test(msg.content)) {
        msg.channel.createMessage(`My prefix is \`${prefix}\`\nExample: \`${prefix} random\``);
    }
    // return if message not start with prefix
    if (!msg.content.toLowerCase().startsWith(prefix)) return undefined;

    let getCmd: Command = client.commands.find((cmd) =>  
        cmd.id == command || cmd.aliases.indexOf(command) !== -1);
    if (!getCmd) return;

    // Check if command is owner
    if (getCmd.owner && !ownerID.includes(msg.author.id)) return;
    if (!cooldowns.has(getCmd.id)) cooldowns.set(getCmd.id, new Map());

    // Command cooldown
    let now: number = Date.now();
    let timeStamp: Map<string, number> = cooldowns.get(getCmd.id) || new Map();
    let coolTime: number = getCmd.cooldown || 5;
    let userCool: number = timeStamp.get(msg.author.id) || 0;
    let estimated: number = userCool + (coolTime * 1000) - now;

    // check if user have cooldown to use the command
    if (userCool && estimated > 0) {
        return msg.channel.createMessage(`**${msg.author.username}**, you have to wait **${(estimated/1000).toFixed()}s** before use the same command again!`);
    }

    timeStamp.set(msg.author.id, now);
    cooldowns.set(getCmd.id, timeStamp);
    getCmd.run(msg, args, client);
}