import type { Player } from "../types/player";
import { base_url, search_url } from "./api_url";

export const fetch_players_01 = async (query: string): Promise<Player[]> => {
    let temp_url = base_url;

    if (query.trim()) {
        temp_url = `${search_url}${query}`;
    }

    return fetch(temp_url).then((res) => res.json()).catch((e) => { throw e });
}