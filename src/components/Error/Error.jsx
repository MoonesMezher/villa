import { FaSadCry, FaSadTear } from "react-icons/fa"

const Error = () => {
  return (
    <div className="p-10 flex justify-center items-center flex-col gap-5 h-[61.4vh]">
      <h1 className="font-bold">404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist. </p>
      <FaSadTear className="text-[2rem]"/>
    </div>
  )
}

export default Error