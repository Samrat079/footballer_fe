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

            {/* Sliding Pane */}
            <ReactSlidingPane
                title=""
                width="36vw"
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                className="bg-gray-50!"
            >
                <div className="flex flex-col gap-6">

                    {/* Header Section */}
                    <div className="pb-4 border-b border-gray-200">
                        <p className="text-2xl font-bold text-gray-900">
                            {player.player}
                        </p>
                        <p className="text-lg text-gray-600">
                            {player.team}
                        </p>
                        <p className="text-sm text-gray-500">
                            {player.nation} • {player.pos} • Age {player.age}
                        </p>
                    </div>

                    {/* Highlight Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white rounded-xl shadow-sm text-center">
                            <p className="text-3xl font-bold text-gray-900">
                                {player.gls}
                            </p>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">
                                Goals
                            </p>
                        </div>

                        <div className="p-4 bg-white rounded-xl shadow-sm text-center">
                            <p className="text-3xl font-bold text-gray-900">
                                {player.ast}
                            </p>
                            <p className="text-xs text-gray-500 uppercase tracking-wide">
                                Assists
                            </p>
                        </div>
                    </div>

                    {/* Detailed Stats */}
                    <div className="
                        flex flex-col
                        divide-y divide-gray-200
                        border border-gray-200
                        rounded-xl
                        overflow-hidden
                        bg-white
                        shadow-sm
                    ">
                        {player_stats.map((stat) => (
                            <div
                                key={stat.field}
                                className="
                                    flex
                                    justify-between
                                    px-4
                                    py-3
                                    hover:bg-gray-50
                                    transition-colors
                                "
                            >
                                <span className="text-sm text-gray-600 font-medium">
                                    {stat.field}
                                </span>
                                <span className="text-sm font-semibold text-gray-900">
                                    {stat.value}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>
            </ReactSlidingPane>
        </div>
    )
}

export default Player_card_01