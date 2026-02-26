import { useState } from 'react'
import type { Player } from '../types/player'
import ReactSlidingPane from 'react-sliding-pane'
import "react-sliding-pane/dist/react-sliding-pane.css";

type PlayerCard01 = {
    player: Player
}

const Player_card_01 = ({ player }: PlayerCard01) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const player_stats = [
        // { field: "Name", value: player.player},
        // { field: "Team", value: player.team},
        { field: "Nation", value: player.nation },
        { field: "Age", value: player.age },
        { field: "Position", value: player.pos },
        { field: "Total Goals", value: player.gls },
        { field: "Total Assists", value: player.ast },
        { field: "Penulty Goals", value: player.pk },
        { field: "Matches played", value: player.mp },
        { field: "Total minutes played", value: player.min },
        { field: "Yellow Cards", value: player.crdY },
        { field: "Red Cards", value: player.crdR },
    ]

    return (
        <div>
            <div
                onClick={() => setIsOpen(true)}
                className="
                    p-4
                    border border-gray-200
                    rounded-xl
                    bg-white
                    shadow-sm
                    hover:shadow-md
                    hover:-translate-y-1
                    transition-all
                    duration-200
                    cursor-pointer
                "
            >
                <p className="text-lg font-semibold text-gray-900">
                    {player.player}
                </p>

                <p className="text-sm text-gray-600">
                    {player.team}
                </p>

                <p className="text-sm text-gray-500">
                    {player.nation}
                </p>
            </div>

            <ReactSlidingPane
                title={player.player}
                width='36vw'
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                className=''
            >
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-bold">{player.team}</p>
                    <div className='border border-gray-200 rounded-xl shadow-md overflow-hidden'>
                        <table className="min-w-full">
                            <tbody>
                                {player_stats.map((player) => (
                                    <tr className="border-b">
                                        <th className="text-left px-4 py-2 bg-gray-300 font-semibold">
                                            {player.field}
                                        </th>
                                        <td className="px-4 py-2">{player.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ReactSlidingPane>
        </div>
    )
}

export default Player_card_01