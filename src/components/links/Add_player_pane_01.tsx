import { useState } from 'react'
import ReactSlidingPane from 'react-sliding-pane';
import "react-sliding-pane/dist/react-sliding-pane.css";

const About_pane_01 = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className='
                    p-2
                    text-left
                    w-full
                    hover:bg-gray-400
                    hover:text-white
                    transition-all
                    duration-200
                '
            >
                Add Player
            </button>
            <ReactSlidingPane
                title="Add player"
                width='36vw'
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                className='bg-gray-50!'

            >
                <p>Add player</p>
            </ReactSlidingPane>
        </div>
    )
}

export default About_pane_01