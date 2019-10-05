import Jabami from "../libs/Client";

export = async (client: Jabami) => {
    console.log(`[ONLINE] ${client.user.username} berhasil online di ${client.guilds.size} server.`);

    setInterval(() => {
        let status: string[] = ["Hentai Desu", "Under Development"];
        let random: number = client.utils.getRandInt(status.length);

        client.editStatus('dnd', { name: status[random] });
    }, 1e4);
}