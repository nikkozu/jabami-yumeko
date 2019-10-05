import axios from "axios";

export = class Utils {
    public static getRandInt(int: number): number {
        return Math.floor(Math.random() * int);
    }

    public static async postToHastebin(code: string, hasteLink = 'https://hastebin.com/documents'): Promise<string> {
        let body = await axios.post(hasteLink, code)
        return `https://hastebin.com/${body.data.key}`;
    }
}