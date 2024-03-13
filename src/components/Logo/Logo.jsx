import { NavLink } from 'react-router-dom'

const Logo = ({logo, style}) => {
    return (
        <NavLink to={'/'}>
            <p className={`text-black font-bold uppercase text-3xl md:text-5xl ${style}`}>{logo}</p>
        </NavLink>
    )
}

export default Logo