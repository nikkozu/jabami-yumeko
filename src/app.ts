import Jabami from "./libs/Client";
import { config } from "dotenv";
config();

const client: Jabami = new Jabami({
    token: process.env.DISCORD_TOKEN,
    erisOptions: {
        disableEveryone: true
    }
});

client.build();