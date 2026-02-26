import { useEffect, useState } from 'react'
import type { Player } from '../types/player';
import Player_card_01 from './Player_card_01';
import { CiSearch } from "react-icons/ci";
import { fetch_players } from '../api/fetch_players';
import About_pane_01 from './links/About_pane_01';
import Github_pane_01 from './links/Github_pane_01';
import Sample_data_pane_01 from './links/Sample_data_pane_01';

const Footballer_list_01 = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const delay = query.trim() ? 200 : 0;

    const timeOut = setTimeout(async () => {
      const data = await fetch_players(query);
      setPlayers(data);
    }, delay);

    return () => clearTimeout(timeOut);
  }, [query]);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-400 shadow-lg p-4 flex flex-col gap-4">
        <p className="text-2xl font-bold">Footballer db</p>

        {/* Search bar */}
        <div className="border rounded-md flex items-center overflow-hidden">
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
        <div className='flex flex-col gap-2'>
          <About_pane_01 />
          <Github_pane_01 />
          <Sample_data_pane_01 />
        </div>

      </aside>

      {/* Scrollable Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        <ul className="grid grid-cols-3 gap-4">
          {players.map((player) => (
            <Player_card_01 player={player} key={player.id} />
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Footballer_list_01