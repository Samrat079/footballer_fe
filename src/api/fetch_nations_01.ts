import { nations_url } from "./api_url"

export const fetch_nations_01 = async (): Promise<string[]> => {
    return await fetch(nations_url).then((res) => res.json()).catch((e) => { throw e });
}