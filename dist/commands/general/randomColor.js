"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../utils/Command"));
const canvas_constructor_1 = require("canvas-constructor");
const EmbedBuilder_1 = __importDefault(require("../../utils/EmbedBuilder"));
class RandomColorCommand extends Command_1.default {
    constructor() {
        super({
            name: "Random Color",
            description: "Get some random color",
            usage: ["randomcolor"],
            aliases: ["rc"],
            cooldown: 10
        });
    }
    async run(msg) {
        const randomColor = '#' + Math.random().toString(16).slice(-6);
        let color = new canvas_constructor_1.Canvas(60, 40)
            .setColor(randomColor)
            .addRect(0, 0, 300, 300);
        let embed = new EmbedBuilder_1.default()
            .description(`Random Color: ${randomColor}`)
            .color(randomColor)
            .image('attachment://color.png')
            .sendable;
        msg.channel.createMessage({ embed: embed }, { file: color.toBuffer(), name: "color.png" });
    }
}
exports.default = RandomColorCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tQ29sb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvZ2VuZXJhbC9yYW5kb21Db2xvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtFQUEwQztBQUUxQywyREFBNEM7QUFDNUMsNEVBQW9EO0FBRXBELE1BQXFCLGtCQUFtQixTQUFRLGlCQUFPO0lBQ25EO1FBQ0ksS0FBSyxDQUFDO1lBQ0YsSUFBSSxFQUFFLGNBQWM7WUFDcEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxLQUFLLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDdEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2YsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFZO1FBQ3pCLE1BQU0sV0FBVyxHQUFXLEdBQUcsR0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksS0FBSyxHQUFHLElBQUksMkJBQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQzdCLFFBQVEsQ0FBQyxXQUFXLENBQUM7YUFDckIsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRXJCLElBQUksS0FBSyxHQUFHLElBQUksc0JBQVksRUFBRTthQUM3QixXQUFXLENBQUMsaUJBQWlCLFdBQVcsRUFBRSxDQUFDO2FBQzNDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDbEIsS0FBSyxDQUFDLHdCQUF3QixDQUFDO2FBQy9CLFFBQVEsQ0FBQTtRQUNULEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMvRixDQUFDO0NBQ0o7QUF4QkQscUNBd0JDIn0=