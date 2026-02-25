import { useEffect, useState } from 'react'
import type { Player } from '../types/player';
import Player_card_01 from './Player_card_01';

const Footballer_list_01 = () => {
const [players, setPlayers] = useState<Player[]>([]);

const fetch_players = async () => {
    const res = await fetch('https://footballers-spring-app.onrender.com/api/v1/footballer');
    const result: Player[] = await res.json();
    setPlayers(result);
}

useEffect(() => {
    fetch_players()
}, []); 

  return (
    <div className='flex items-center justify-center'>
        <ul className='flex flex-wrap gap-4'>
            {players.map((player) => (
              <Player_card_01 player={player} key={player.id}/>
            ))}
        </ul>
    </div>
  )
}

export default Footballer_list_01