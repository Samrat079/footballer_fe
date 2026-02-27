import { PiEmpty } from "react-icons/pi";

const Is_Empty_01 = ({query} : {query: string}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <PiEmpty size={64}/>
            <p>No entries found {query && ` for ${query}`}</p>
        </div>
    )
}

export default Is_Empty_01