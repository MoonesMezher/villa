import { IoMdCalendar } from "react-icons/io"
import { Link } from "react-router-dom"

const ScheduleBtn = ({link, icon, style, name}) => {
    return (
        <Link to={link} className={`flex relative top-0 items-center text-[1.1rem] text-white rounded-[30px] bg-black py-2 px-6 duration-300 hover:text-__orange cursor-pointer ${style} w-fit`}>
            {icon && <span className="absolute bg-__orange rounded-full p-3 left-[-2px]">
                <IoMdCalendar className="text-white"/>
            </span>}
            <span className={`${icon && 'ms-6'} text-nowrap`}>{name || 'Schedule a visit'}</span>
        </Link>
    )
}

export default ScheduleBtn