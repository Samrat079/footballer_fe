import { useState } from 'react'
import ReactSlidingPane from 'react-sliding-pane';
import "react-sliding-pane/dist/react-sliding-pane.css";

const Github_pane_01 = () => {
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <div>
            <div onClick={() => setOpen(true)}>Github</div>
            <ReactSlidingPane
                title="Github"
                width='36vw'
                isOpen={open}
                onRequestClose={() => setOpen(false)}
            >
                <p>Github</p>
            </ReactSlidingPane>
        </div>
    )
}

export default Github_pane_01