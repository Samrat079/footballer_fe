import type { Player } from "../types/player";
import { base_url, search_url } from "./api_url";


export const fetch_players = async (query: string) => {
    let temp_url = base_url;

    if (query.trim()) {
        temp_url = `${search_url}${query}`;
    }

    const res = await fetch(temp_url);
    const data: Player[] = await res.json();
    return data;
}