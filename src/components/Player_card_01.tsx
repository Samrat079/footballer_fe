import type { Player } from '../types/player'

type PlayerCard01 = {
    player : Player
}

const Player_card_01 = ({player} : PlayerCard01) => {
    return (
        <div className='w-60 h-40 p-2 border-white border rounded-md'>
            <p>{player.player}</p>
            <p>{player.team}</p>
            <p>{player.age}</p>
        </div>
    )
}

export default Player_card_01