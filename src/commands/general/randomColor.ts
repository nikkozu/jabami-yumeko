import Command from "../../utils/Command";
import { Message } from "eris";
import { Canvas } from "canvas-constructor";
import EmbedBuilder from "../../utils/EmbedBuilder";

export default class RandomColorCommand extends Command {
    public constructor() {
        super({
            name: "Random Color",
            description: "Get some random color",
            usage: ["randomcolor"],
            aliases: ["rc"],
            cooldown: 10
        });
    }

    public async run(msg: Message) {
        const randomColor: string = '#'+Math.random().toString(16).slice(-6);
        let color = new Canvas(60, 40)
        .setColor(randomColor)
        .addRect(0,0,300,300)

        let embed = new EmbedBuilder()
        .description(`Random Color: ${randomColor}`)
        .color(randomColor)
        .image('attachment://color.png')
        .sendable
        msg.channel.createMessage({ embed: embed }, { file: color.toBuffer(), name: "color.png" });
    }
}