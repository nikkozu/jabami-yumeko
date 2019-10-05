import { ICommandHelp } from "../interface/ICommand";
import { Message } from "eris";
import Jabami from "../libs/Client";

export default class Command {
    public id: string;
    
    public name: string;
    public description: string;
    public usage: string[];
    public aliases: string[];
    public cooldown: number;
    public owner: boolean;

    public constructor(help: ICommandHelp) {
        this.id = help.name.replace(/\s/g, '').toLowerCase();

        this.name = help.name;
        this.description = help.description;
        this.usage = help.usage || [];
        this.aliases = help.aliases || [];
        this.cooldown = help.cooldown || 5;
        this.owner = help.owner || false;
    }

    public async run(msg: Message, args: string[], client: Jabami): Promise<any> {
        throw new Error("This command is not yet implemented");
    }
}