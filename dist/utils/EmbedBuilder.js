"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmbedBuilder {
    constructor(data = {}) {
        this._title = data.title;
        this._type = data.type || 'rich';
        this._description = data.description;
        this._url = data.url;
        this._timestamp = data.timestamp;
        this._color = data.color;
        this._footer = data.footer;
        this._image = data.image;
        this._thumbnail = data.thumbnail;
        this._video = data.video;
        this._provider = data.provider;
        this._author = data.author;
        this._fields = data.fields || [];
    }
    title(title) {
        if (title.length > 256)
            throw new Error('The _title should not be longer than 265 characters.');
        this._title = title;
        return this;
    }
    description(description) {
        if (description.length > 2048)
            throw new Error('The description should not be longer than 265 characters.');
        this._description = description;
        return this;
    }
    url(url) {
        this._url = url;
        return this;
    }
    color(color) {
        let base = 10;
        if (typeof color === 'string' && color.startsWith('#')) {
            color = color.replace('#', '');
            base = 16;
        }
        color = parseInt(color, base);
        if (color < 0 || color > 0xFFFFFF)
            throw new Error('Color must be a valid HEX-Color for HTML or be an integer within 0 - 16777215');
        else if (color && isNaN(color))
            throw new Error('Could not convert color to number.');
        this._color = color;
        return this;
    }
    author(name, icon_url, url) {
        this._author = { name, icon_url, url };
        return this;
    }
    timestamp(timestamp = new Date()) {
        this._timestamp = timestamp;
        return this;
    }
    field(name, value, inline = false) {
        if (this._fields.length >= 25)
            throw new Error('You cannot add more than 25 fields.');
        if (name.length > 256)
            throw new Error('A field name may not be longer than 256 characters.');
        if (value.length > 1024)
            throw new Error('A field value may not be longer than 1024 characters.');
        this._fields.push({ name, value, inline });
        return this;
    }
    thumbnail(url, options) {
        if (options) {
            this._thumbnail = { url, height: options.height, width: options.width };
        }
        else {
            this._thumbnail = { url };
        }
        return this;
    }
    image(url, options) {
        if (options) {
            this._image = { url, height: options.height, width: options.width };
        }
        else {
            this._image = { url };
        }
        return this;
    }
    footer(text, icon_url) {
        if (text.length > 2048)
            throw new Error('A footer may not be longer than 2048 characters');
        this._footer = { text, icon_url };
        return this;
    }
    get sendable() {
        return {
            title: this._title,
            type: this._type,
            description: this._description,
            url: this._url,
            timestamp: this._timestamp,
            color: this._color,
            footer: this._footer,
            image: this._image,
            thumbnail: this._thumbnail,
            video: this._video,
            provider: this._provider,
            author: this._author,
            fields: this._fields
        };
    }
}
exports.default = EmbedBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1iZWRCdWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL0VtYmVkQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQXFCLFlBQVk7SUFvQjdCLFlBQVksT0FBWSxFQUFFO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFPRCxLQUFLLENBQUMsS0FBYTtRQUNmLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1FBQ2hHLElBQUks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