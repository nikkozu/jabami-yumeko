export interface ICommandHelp {
    name: string;
    description: string;
    usage?: string[];
    aliases?: string[];
    cooldown?: number;
    owner?: boolean;
}