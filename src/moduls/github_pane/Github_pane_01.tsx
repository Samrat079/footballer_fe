import { useState } from 'react'
import ReactSlidingPane from 'react-sliding-pane';
import "react-sliding-pane/dist/react-sliding-pane.css";

const Github_pane_01 = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className='
                    px-4
                    py-2
                    text-left
                    w-full
                    hover:bg-gray-400
                    hover:text-white
                    transition-all
                    duration-200
                '
            >
                Github
            </button>
            <ReactSlidingPane
                title="Github"
                width='36vw'
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                className='bg-gray-50!'

            >
                <p>Github</p>
            </ReactSlidingPane>
        </div>
    )
}

export default Github_pane_01