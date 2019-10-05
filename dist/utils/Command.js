"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    constructor(help) {
        this.id = help.name.replace(/\s/g, '').toLowerCase();
        this.name = help.name;
        this.description = help.description;
        this.usage = help.usage || [];
        this.aliases = help.aliases || [];
        this.cooldown = help.cooldown || 5;
        this.owner = help.owner || false;
    }
    async run(msg, args, client) {
        throw new Error("This command is not yet implemented");
    }
}
exports.default = Command;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9Db21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBcUIsT0FBTztJQVV4QixZQUFtQixJQUFrQjtRQUNqQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVyRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7SUFDckMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBWSxFQUFFLElBQWMsRUFBRSxNQUFjO1FBQ3pELE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQ0o7QUF4QkQsMEJBd0JDIn0=