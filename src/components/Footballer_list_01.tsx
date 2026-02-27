import {  useState } from 'react'
import type { Player } from '../types/player';
import Player_card_01 from './Player_card_01';
import { CiSearch } from "react-icons/ci";
import { fetch_players_01 } from '../api/fetch_players_01';
import About_pane_01 from './links/About_pane_01';
import Sample_data_pane_01 from './links/Sample_data_pane_01';
import Add_player_pane_01 from './links/Add_player_pane_01';
import { useQuery } from '@tanstack/react-query';
import Loading_spinner_01 from './Api_states/Loading_spinner_01';
import Error_display_01 from './Api_states/Error_display_01';
import Is_Empty_01 from './Api_states/Is_Empty_01';

const Footballer_list_01 = () => {
  const [query, setQuery] = useState<string>('');

  const {data, error, isError, isLoading} = useQuery<Player[]>({
    queryKey: ['players', query],
    queryFn: () => fetch_players_01(query),
  });

  return (
    <div className="flex h-screen w-full overflow-hidden fixed">

      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-400 shadow-lg flex flex-col">
        <p className="text-2xl font-bold m-4">Footballer db</p>

        {/* Search bar */}
        <div className="border rounded-md flex items-center overflow-hidden m-4">
          <input
            type="search"
            placeholder="lionel ronaldo...."
            className="flex-1 min-w-0 p-2 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 flex items-center justify-center shrink-0"
          >
            <CiSearch size={20} />
          </button>
        </div>

        {/* Links */}
        <div className='flex flex-col'>
          <Add_player_pane_01 />
          <About_pane_01 />
          {/* <Github_pane_01 /> */}
          <Sample_data_pane_01 />
        </div>

      </aside>

      {/* Scrollable Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        {isLoading && <Loading_spinner_01 />}
        {isError && <Error_display_01 code={error} />}
        {data?.length == 0 && <Is_Empty_01 query={query}/>}
        <ul className="grid grid-cols-3 gap-4">
          {data?.map((player) => (
            <Player_card_01 player={player} key={player.id} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Footballer_list_01