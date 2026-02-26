import { useEffect, useState } from 'react'
import type { Player } from '../types/player';
import Player_card_01 from './Player_card_01';
import { CiSearch } from "react-icons/ci";
import { fetch_players } from '../api/fetch_players';

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
    <div className='flex flex-col justify-center'>
      <div className='p-4 flex justify-between items-center'>
        <p>Footballer db</p>
        <div className='p-0 border rounded-md' >
          <input
            type='search'
            placeholder='lionel ronaldo....'
            className='p-2'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit' className='p-2 bg-blue-300'><CiSearch /></button>
        </div>
      </div>
      <ul className='flex flex-wrap gap-4'>
        {players.map((player) => (
          <Player_card_01 player={player} key={player.id} />
        ))}
      </ul>
    </div>
  )
}

export default Footballer_list_01