import { useLocation } from "react-router-dom"
import Img from '../../assets/imgs/page-heading-bg.jpg'

const Hero = () => {
    const {pathname} = useLocation();

    let route = pathname.split('/')[1]; 

    if(route.includes('-')) {
        route = route.split('-').join(' ');
    }


    return (
        <div className="w-full h-[350px] relative px-2 bg-white rounded-t-md">
            <div className="relative w-full h-full rounded-t-md">
                <img src={Img} alt={Img} className="w-full h-full object-cover rounded-t-md"/>
            </div>
            <div className="text-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-20">
                <div className="text-black px-4 py-3 bg-white w-fit mx-auto uppercase">Home  /  <span>{route}</span></div>
                <h1 className="font-extrabold text-white text-4xl md:text-6xl mt-7 uppercase">{route}</h1>
            </div>
        </div>
    )
}

export default Hero