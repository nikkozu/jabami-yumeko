declare namespace NodeJS {
    interface Process {
        env: ProcessEnv
    }
    interface ProcessEnv {
        DISCORD_TOKEN: string;
        BOT_PREFIX: string;
        OWNER_ID: string;
    }
}