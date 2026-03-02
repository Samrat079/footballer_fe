import { type ChangeEvent } from 'react'
import Player_card_01 from './Player_card_01';

import { useQuery } from '@tanstack/react-query';

import { fetch_players_01 } from './API/fetch_players_01';
import type { Player } from '../../types/player';
import Error_display_01 from '../../components/Api_states/Error_display_01';
import Is_Empty_01 from '../../components/Api_states/Is_Empty_01';
import Loading_spinner_01 from '../../components/Api_states/Loading_spinner_01';
import Sample_data_pane_01 from '../sample_data/Sample_data_pane_01';
import About_pane_01 from '../about_pane/About_pane_01';
import Add_player_pane_01 from '../add_player/Add_player_pane_01';
import { useSearchParams } from 'react-router-dom';
import { useDebouncer } from './Hooks/useDebouncer';

const Footballer_list_01 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const search_q = useDebouncer(searchQuery) || (""); 

  const handle_change = (e: ChangeEvent<HTMLFormElement>) => {
    const term = e.target.value;

    if (term === '') return setSearchParams({})
    setSearchParams({ query: term });
  };

  const { data, error, isError, isLoading } = useQuery<Player[]>({
    queryKey: ['players', search_q],
    queryFn: () => fetch_players_01(search_q),
    staleTime: Infinity
  });

  return (
    <div className="flex h-screen w-full overflow-hidden fixed">

      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-400 shadow-lg flex flex-col">
        <p className="text-2xl font-bold m-4">Footballer db</p>

        {/* Search bar */}
        <form
          className="border rounded-md flex items-center overflow-hidden m-4"
          onChange={handle_change}
        >
          <input
            type="search"
            placeholder="lionel ronaldo...."
            className="flex-1 min-w-0 p-2 outline-none"
          />
        </form>

        {/* Links */}
        <div className='flex flex-col'>
          <Add_player_pane_01 />
          <About_pane_01 />
          <Sample_data_pane_01 />
        </div>

      </aside>

      {/* Scrollable Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        {isLoading && <Loading_spinner_01 />}
        {isError && <Error_display_01 code={error} />}
        {data?.length == 0 && <Is_Empty_01 query={search_q} />}
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