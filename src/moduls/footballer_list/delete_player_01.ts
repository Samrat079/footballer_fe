import { base_url } from "../../api/api_url"

export const delete_player_01 = async (player_id: string) => {
    return await fetch(base_url + "/" + player_id, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .catch((e) => { throw e })
}