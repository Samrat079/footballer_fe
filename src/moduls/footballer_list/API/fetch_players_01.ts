import { base_url } from "../../../api/api_url";
import type { Player } from "../../../types/player";

export const fetch_players_01 = async (query: string): Promise<Player[]> => {
    let temp_url = base_url;

    if (query.trim()) {
        temp_url = base_url + "?query=" + query;
    }

    return fetch(temp_url).then((res) => res.json()).catch((e) => { throw e });
}