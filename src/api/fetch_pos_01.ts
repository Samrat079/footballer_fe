import { positions_url } from "./api_url"

export const fetch_pos_01 = async (): Promise<string[]> => {
    return await fetch(positions_url).then((res) => res.json()).catch((e) => { throw e });
}