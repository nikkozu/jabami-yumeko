import Command from "../utils/Command";
import { Client, Collection } from "eris";
import { readdirSync } from "fs";
import { IBuildClient } from "../interface/IClient";
import { IUtils } from "../interface/IUtils";

export default class Jabami extends Client {
    public commands: Collection<Command>;
    public utils: IUtils;

    public constructor(build: IBuildClient) {
        super(build.token, build.erisOptions);

        this.commands = new Collection(Command);
        this.utils = require("./Utils");
    }

    public build() {
        // Commands Loader
        for (const folder of readdirSync(`./dist/commands`)) {
            for (const cmdFile of readdirSync(`./dist/commands/${folder}`).filter(cmd => cmd.endsWith('.js'))) {
                const command = require(`../commands/${folder}/${cmdFile}`);
                let resolve = new command.default();
                resolve.category = folder;
                this.commands.add(resolve);
            }
        }
        // Events Loader
        for (const event of readdirSync(`./dist/events`).filter(evt => evt.endsWith('.js'))) {
            let evtFile = require(`../events/${event}`);
            this.on(event.split('.')[0], (...args: any) => evtFile(this, ...args));
        }
        // connect to discord
        this.connect();
    }
}