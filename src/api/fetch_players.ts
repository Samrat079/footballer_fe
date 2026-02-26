import type { Player } from "../types/player";

const base_url = "https://footballers-spring-app.onrender.com/api/v1/footballer";

export const fetch_players = async (query: string) => {
    let temp_url = base_url;

    if (query.trim()) {
        temp_url = `${base_url}/q?query=${query}`;
    }

    const res = await fetch(temp_url);
    const data: Player[] = await res.json();
    return data;
}