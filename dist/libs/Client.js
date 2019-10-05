"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../utils/Command"));
const eris_1 = require("eris");
const fs_1 = require("fs");
class Jabami extends eris_1.Client {
    constructor(build) {
        super(build.token, build.erisOptions);
        this.commands = new eris_1.Collection(Command_1.default);
        this.utils = require("./Utils");
    }
    build() {
        for (const folder of fs_1.readdirSync(`./dist/commands`)) {
            for (const cmdFile of fs_1.readdirSync(`./dist/commands/${folder}`).filter(cmd => cmd.endsWith('.js'))) {
                const command = require(`../commands/${folder}/${cmdFile}`);
                let resolve = new command.default();
                resolve.category = folder;
                this.commands.add(resolve);
            }
        }
        for (const event of fs_1.readdirSync(`./dist/events`).filter(evt => evt.endsWith('.js'))) {
            let evtFile = require(`../events/${event}`);
            this.on(event.split('.')[0], (...args) => evtFile(this, ...args));
        }
        this.connect();
    }
}
exports.default = Jabami;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0RBQXVDO0FBQ3ZDLCtCQUEwQztBQUMxQywyQkFBaUM7QUFJakMsTUFBcUIsTUFBTyxTQUFRLGFBQU07SUFJdEMsWUFBbUIsS0FBbUI7UUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBVSxDQUFDLGlCQUFPLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sS0FBSztRQUVSLEtBQUssTUFBTSxNQUFNLElBQUksZ0JBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQ2pELEtBQUssTUFBTSxPQUFPLElBQUksZ0JBQVcsQ0FBQyxtQkFBbUIsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQy9GLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlLE1BQU0sSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7UUFFRCxLQUFLLE1BQU0sS0FBSyxJQUFJLGdCQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pGLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzFFO1FBRUQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7Q0FDSjtBQTdCRCx5QkE2QkMifQ==