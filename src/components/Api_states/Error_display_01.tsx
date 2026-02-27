import { VscBracketError } from "react-icons/vsc";

const Error_display_01 = ({code} : {code: Error}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <VscBracketError size={64} />
            <p>Something went wrong...</p>
            <p>{code?.message}</p>
        </div>
    )
}

export default Error_display_01