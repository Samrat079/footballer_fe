import { ImSpinner2 } from "react-icons/im";

const Loading_spinner_01 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
        <ImSpinner2 size={64} className="animate-spin"/>
        <p>Please wait....</p>
    </div>
  )
}

export default Loading_spinner_01