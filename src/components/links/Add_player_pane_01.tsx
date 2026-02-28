import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import ReactSlidingPane from 'react-sliding-pane'
import "react-sliding-pane/dist/react-sliding-pane.css"

import type { Player } from '../../types/player'
import { fetch_all_options_01 } from '../../api/fetch_all_options_01'

const initialState = {
    id: '',
    player: '',
    team: '',
    nation: '',
    pos: '',
    age: 0,
    gls: 0,
    mp: 0,
    min: 0,
    ast: 0,
    crdR: 0,
    crdY: 0,
    pk: 0,
    starts: 0,
    xG: 0.0,
    xAG: 0.0
}


const About_pane_01 = () => {
    const [open, setOpen] = useState<boolean>(false)

    const [formData, setFormData] = useState<Player>(initialState)

    const { data : all_options} = useQuery({
        queryKey: ["all_options"],
        queryFn: fetch_all_options_01
    })

    const team_options = all_options?.team ?? [];
    const nation_options = all_options?.nation ?? [];
    const pos_options = all_options?.position ?? [];

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]:
                ["player", "team", "nation", "pos"].includes(name)
                    ? value
                    : Number(value),
        }))
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("NEW PLAYER:", formData)
        setFormData(initialState);
    }

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className="
          px-4 py-2 text-left w-full
          hover:bg-gray-400 hover:text-white
          transition-all duration-200
        "
            >
                Add Player
            </button>

            <ReactSlidingPane
                title="Add Player"
                width='36vw'
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                className='bg-gray-50'
            >
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 p-2"
                >

                    {/* Player Name */}
                    <input
                        name="player"
                        placeholder="Player Name"
                        value={formData.player}
                        onChange={handleChange}
                        className="input-style"
                        required
                    />

                    {/* Team */}
                    <div className="flex flex-col gap-1">
                        <label className="label-style">Team</label>

                        <select
                            name="team"
                            value={formData.team}
                            onChange={handleChange}
                            className="input-style"
                            required
                        >
                            <option value="">Select team</option>
                            {team_options.map((team) => (
                                <option key={team} value={team}>
                                    {team}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Nation */}
                    <div className="flex flex-col gap-1">
                        <label className="label-style">Nation</label>

                        <select
                            name="nation"
                            value={formData.nation}
                            onChange={handleChange}
                            className="input-style"
                            required
                        >
                            <option value="">Select nation</option>
                            {nation_options.map((nation) => (
                                <option key={nation} value={nation}>
                                    {nation}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Position */}
                    <div className="flex flex-col gap-1">
                        <label className="label-style">Position</label>

                        <select
                            name="pos"
                            value={formData.pos}
                            onChange={handleChange}
                            className="input-style"
                            required
                        >
                            <option value="">Select position</option>
                            {pos_options.map((pos) => (
                                <option key={pos} value={pos}>
                                    {pos}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            "age", "gls", "mp", "min",
                            "ast", "crdR", "crdY", "pk", "starts"
                        ].map(field => (
                            <div key={field} className="flex flex-col">
                                <label className="text-xs font-medium text-gray-600 mb-1">
                                    {field}
                                </label>

                                <input
                                    type="number"
                                    name={field}
                                    value={(formData as any)[field]}
                                    onChange={handleChange}
                                    min={0}
                                    className="input-style"
                                />
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-row gap-2'>
                        <button
                            type="submit"
                            className="
                                    w-full
                                    inline-block
                                    p-4
                                    border border-gray-200
                                    rounded-xl
                                    shadow-sm
                                    hover:bg-gray-500
                                    hover:text-white
                                    hover:shadow-lg
                                    hover:-translate-y-1
                                    transition-all
                                    duration-200
                                    "
                        >
                            Add Player
                        </button>
                        <button
                            className="
                                    w-full
                                    p-4
                                    border border-gray-200
                                    rounded-xl
                                    shadow-sm
                                    hover:bg-red-500
                                    hover:text-white
                                    hover:shadow-lg
                                    hover:-translate-y-1
                                    transition-all
                                    duration-200
                                    "
                            onClick={() => setFormData(initialState)}
                        >
                            Clear
                        </button>
                    </div>

                </form>
            </ReactSlidingPane>
        </div>
    )
}

export default About_pane_01