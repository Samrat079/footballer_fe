import { teams_url } from "./api_url"

export const fetch_teams_01 = async (): Promise<string[]> => {
    return await fetch(teams_url).then((res) => res.json()).catch((e) => { throw e });
}