import { base_url } from "./api_url"

export interface All_options {
    team: string[],
    nation: string[],
    position: string[]
}

export const fetch_all_options_01 = async (): Promise<All_options> => {
    return await fetch(base_url + "/all_options").then((res) => res.json()).catch((e) => { throw e });
}