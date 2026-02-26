import { useState } from 'react'
import ReactSlidingPane from 'react-sliding-pane';
import "react-sliding-pane/dist/react-sliding-pane.css";

const Sample_data_pane_01 = () => {
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <div>
            <div onClick={() => setOpen(true)}>Sample Data</div>
            <ReactSlidingPane
                title="Sample Data"
                width='36vw'
                isOpen={open}
                onRequestClose={() => setOpen(false)}
            >
                <p>Sample Data</p>
            </ReactSlidingPane>
        </div>
    )
}

export default Sample_data_pane_01