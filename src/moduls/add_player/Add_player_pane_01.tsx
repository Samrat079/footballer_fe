import { useState } from 'react'
import ReactSlidingPane from 'react-sliding-pane'
import "react-sliding-pane/dist/react-sliding-pane.css"

import player_options from './player_options.json'
import { add_player_01 } from './add_player_01'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Loading_spinner_01 from '../../components/Api_states/Loading_spinner_01'
import type { Player } from '../../types/player'

const Add_player_pane_01 = () => {
    const [open, setOpen] = useState<boolean>(false)

    const team_options = player_options.team;
    const nation_options = player_options.nation;
    const pos_options = player_options.position;
    const stats_fields = player_options.stats_fields;

    const query_client = useQueryClient();

    const post_mutation = useMutation({
        mutationFn: (newPlayer: Player) => add_player_01(newPlayer),
        onSuccess: () => {
            query_client.invalidateQueries({ queryKey: ["players"] });
        },
    });

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target_form = new FormData(e.currentTarget)
        const raw_data = Object.fromEntries(target_form.entries())

        const newPlayer: Player = {
            ...raw_data,
            age: Number(raw_data.age),
            gls: Number(raw_data.gls),
            mp: Number(raw_data.mp),
            min: Number(raw_data.min),
            ast: Number(raw_data.ast),
            crdR: Number(raw_data.crdR),
            crdY: Number(raw_data.crdY),
            pk: Number(raw_data.pk),
            starts: Number(raw_data.starts),
            xG: Number(raw_data.xG),
            xAG: Number(raw_data.xAG),
        } as Player;

        post_mutation.mutate(newPlayer);

        if (post_mutation.isSuccess) {
            e.currentTarget.reset();
            setOpen(false)
        }
    };

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
                {post_mutation.isPending && <Loading_spinner_01 />}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 p-2"
                >

                    {/* Player Name */}
                    <input
                        name="player"
                        placeholder="Player Name"
                        className="input-style"
                        required
                    />

                    {/* Team */}
                    <div className="flex flex-col gap-1">
                        <label className="label-style">Team</label>

                        <select
                            name="team"
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
                        {stats_fields.map(field => (
                            <div key={field} className="flex flex-col">
                                <label className="text-xs font-medium text-gray-600 mb-1">
                                    {field}
                                </label>

                                <input
                                    type="number"
                                    name={field}
                                    min={0}
                                    className="input-style"
                                />
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-row gap-2'>
                        <button
                            disabled={post_mutation.isPending}
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
                            disabled={post_mutation.isPending}
                            type='reset'
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
                        >
                            Clear
                        </button>
                    </div>

                </form>
            </ReactSlidingPane>
        </div>
    )
}

export default Add_player_pane_01