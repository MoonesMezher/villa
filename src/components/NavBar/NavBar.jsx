import { NavLink } from "react-router-dom"
import ScheduleBtn from "../Buttons/ScheduleBtn/ScheduleBtn"
import { IoMdClose, IoMdMenu } from "react-icons/io"
import Logo from '../Logo/Logo'

const NavBar = ({isVisible, setIsVisible, links, logo}) => {
    return (
        <nav className={`flex justify-between items-center md:mx-7 py-5 p-2 md:p-10 bg-white`}>
            <Logo logo={logo}/>
            <ul className={`${isVisible?'flex flex-col absolute top-0 p-10 left-[50%] translate-x-[-50%] z-50 bg-white w-full':'hidden'} md:flex justify-center items-center gap-5 min-[1120px]:gap-10 max-[767px]:shadow-sm shadow-neutral-400`}>
                {links && links.map((link, i) => (<li key={i} className="text-[1.1rem] text-neutral-400 duration-300 hover:text-__orange text-nowrap">
                        <NavLink to={link.href} className={({isActive}) => isActive? 'text-__orange': '' } onClick={() => setIsVisible(false)}>{link.name}</NavLink>
                    </li>)
                )}
                <div onClick={() => setIsVisible(false)}>
                    <Logo logo={logo} style={'absolute left-[1rem] top-[1.2rem] z-20 md:hidden'}/>
                </div>
                <ScheduleBtn icon={true} style={'max-[991px]:hidden'} link={'/'}/>
                <IoMdClose className="absolute right-[1rem] top-[1rem] text-[2.5rem] text-neutral-400 md:hidden" onClick={() => setIsVisible(false)}/>
            </ul>
            <IoMdMenu className="text-neutral-400 text-[2.5rem] cursor-pointer md:hidden" onClick={() => setIsVisible(true)}/>
        </nav>
    )
}

export default NavBar