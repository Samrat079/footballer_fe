import { useState } from 'react'
import ReactSlidingPane from 'react-sliding-pane';
import "react-sliding-pane/dist/react-sliding-pane.css";
import { download_dataset_url } from '../../api/api_url';

const Sample_data_pane_01 = () => {
    const [open, setOpen] = useState<boolean>(false);
    const exampleFootballer = {
        id: "699f3699542babae0d2c86d1",
        player: "Gabriel Dos Santos",
        team: "Arsenal",
        nation: "br BRA",
        pos: "DF",
        age: 35,
        gls: 2,
        mp: 14,
        min: 1260,
        ast: 0,
        crdR: 0,
        crdY: 2,
        pk: 0,
        starts: 14,
    };

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
                Sample Data
            </button>
            <ReactSlidingPane
                title="Sample Data"
                width="36vw"
                isOpen={open}
                onRequestClose={() => setOpen(false)}
                className='bg-gray-50!'
            >
                <div className="space-y-4 text-sm text-gray-700 leading-relaxed">

                    <p className="text-2xl font-semibold text-gray-900">
                        Backend, API & Data Structure
                    </p>

                    <hr />

                    <p>
                        The backend of this project is built using
                        <span className="font-semibold text-gray-900"> Spring Boot </span>
                        and exposes RESTful APIs that allow the frontend to perform
                        full CRUD operations on football player data.
                    </p>

                    <hr />

                    <p>
                        The player dataset was sourced and adapted from the open-source
                        Premier League project:
                        <a
                            href="https://github.com/Erik-Cupsa/PLWebsite"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline ml-1"
                        >
                            PLWebsite Repository
                        </a>.
                        The data was structured and integrated into the Spring Boot backend
                        for persistent storage and API exposure.
                    </p>

                    <hr />

                    <p className="text-lg font-semibold text-gray-900">
                        Available API Endpoints
                    </p>

                    <hr />

                    <div className="space-y-2 font-mono text-xs bg-gray-50 p-3 rounded">
                        <p>GET    /footballers</p>
                        <p>GET    /footballers/{'{id}'}</p>
                        <p>POST   /footballers</p>
                        <p>PUT    /footballers/{'{id}'}</p>
                        <p>DELETE /footballers/{'{id}'}</p>
                    </div>

                    <hr />

                    <p className="text-lg font-semibold text-gray-900">
                        Footballer Data Structure
                    </p>

                    <hr />

                    <p>
                        Each footballer entity in the system follows a structured JSON format.
                        Below is an example record:
                    </p>

                    <hr />

                    <pre className="bg-gray-900 text-green-400 font-mono text-xs p-4 rounded overflow-x-auto">
                        {JSON.stringify(exampleFootballer, null, 2)}
                    </pre>

                    <hr />

                    <p>
                        The structure includes performance metrics (goals, assists, cards),
                        appearance statistics (matches played, minutes, starts),
                        and identifying information (name, team, nation, position).
                        This format allows efficient querying, filtering, and frontend rendering.
                    </p>

                    <a
                        href={download_dataset_url}
                        download={true}
                        className="
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

                        Download Sample Data
                    </a>

                </div>
            </ReactSlidingPane>
        </div>
    )
}

export default Sample_data_pane_01