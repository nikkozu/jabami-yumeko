"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = __importDefault(require("./libs/Client"));
const dotenv_1 = require("dotenv");
dotenv_1.config();
const client = new Client_1.default({
    token: process.env.DISCORD_TOKEN,
    erisOptions: {
        disableEveryone: true
    }
});
client.build();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJEQUFtQztBQUNuQyxtQ0FBZ0M7QUFDaEMsZUFBTSxFQUFFLENBQUM7QUFFVCxNQUFNLE1BQU0sR0FBVyxJQUFJLGdCQUFNLENBQUM7SUFDOUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYTtJQUNoQyxXQUFXLEVBQUU7UUFDVCxlQUFlLEVBQUUsSUFBSTtLQUN4QjtDQUNKLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyJ9