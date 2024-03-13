import Img from '../../../assets/imgs/featured.jpg'
import Accordion from '../../../components/Accordion/Accordion';
import Info from '../../../components/Info/Info';
import Title from "../../../components/Title/Title"
import { FaBook } from "react-icons/fa";

const Featured = () => {
    return (
        <div className="flex max-[1200px]:flex-col justify-center gap-5 max-[1200px]:items-center">
            <div className='relative max-[768px]:w-full basis-[100%] min-[1200px]:basis-[25%]'>
                <img className='h-full object-cover max-[768px]:w-full' src={Img} alt={Img}/>
                <span className='z-10 absolute bottom-0 translate-y-[50%] left-0 translate-x-[-50%] bg-__orange rounded-full p-7 hidden md:block'>
                    <FaBook className='text-white text-5xl'/>
                </span>
            </div>
            <div className='basis-[100%] max-[768px]:w-full min-[1200px]:basis-[25%] mt-12 min-[1200px]:mt-0'>
                <Title title={'Featured'} discription={'Best Appartment & Sea View'} style="text-left min-[769px]:mx-0 min-[1200px]:w-[8em]"/>
                <Accordion/>
            </div>
            <div className='basis-[100%] max-[768px]:w-full min-[1200px]:basis-[25%] w-[60%]'>
                <Info/>
            </div>
        </div>  
    )
}

export default Featured