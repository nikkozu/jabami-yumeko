"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
module.exports = class Utils {
    static getRandInt(int) {
        return Math.floor(Math.random() * int);
    }
    static async postToHastebin(code, hasteLink = 'https://hastebin.com/documents') {
        let body = await axios_1.default.post(hasteLink, code);
        return `https://hastebin.com/${body.data.key}`;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9VdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsa0RBQTBCO0FBRTFCLGlCQUFTLE1BQU0sS0FBSztJQUNULE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFZLEVBQUUsU0FBUyxHQUFHLGdDQUFnQztRQUN6RixJQUFJLElBQUksR0FBRyxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzVDLE9BQU8sd0JBQXdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbkQsQ0FBQztDQUNKLENBQUEifQ==