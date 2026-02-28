import { base_url } from "../../api/api_url";
import type { Player } from "../../types/player";

export const add_player_01 = async (formData : Player) => {

    return fetch(
        base_url,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }
    )
        .then((res) => res.json())
        .catch((e) => { throw e })
}