import { useState } from 'react'
import ReactSlidingPane from 'react-sliding-pane';
import "react-sliding-pane/dist/react-sliding-pane.css";

const About_pane_01 = () => {
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <div>
            <div onClick={() => setOpen(true)}>About</div>
            <ReactSlidingPane
                title="About"
                width='36vw'
                isOpen={open}
                onRequestClose={() => setOpen(false)}
            >
                <p>About</p>
            </ReactSlidingPane>
        </div>
    )
}

export default About_pane_01