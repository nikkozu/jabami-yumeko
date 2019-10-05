export interface IEmbedBuilder {
    title: string;
    type: string;
    description: string;
    url: string;
    timestamp: Date;
    color: number;

    footer: { icon_url: string, text: string };
    image: Object;
    thumbnail: Object;
    video: Object;
    provider: Object;
    author: Object;
    fields: Array<{ name: string, value: string, inline: boolean }>;
}