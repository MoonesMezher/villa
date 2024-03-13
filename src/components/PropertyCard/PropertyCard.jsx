import { Link } from "react-router-dom";
import ScheduleBtn from "../Buttons/ScheduleBtn/ScheduleBtn";
import Box from "../Box/Box";
import Heading from "../Heading/Heading";

const PropertyCard = ({prop}) => {
    return (
        <div className="bg-__gray rounded-md h-fit p-5 basis-full md:basis-[45%] min-[1100px]:basis-[28%]">
            { prop && <>
                <Link to={prop.link} className="w-full overflow-hidden block">
                    <img src={prop.img} alt={prop.img} className="w-full h-full object-cover aspect-square rounded-md duration-500 md:hover:scale-110 md:hover:rotate-2"/>
                </Link>
                <div className="flex justify-between items-end gap-2 my-5 max-[400px]:flex-col max-[400px]:gap-5 max-[400px]:items-center">
                    <Box text={prop.type}/>
                    <span className="text-__orange font-bold text-[1.4rem]">${prop.price}</span>
                </div>
                <Heading text={prop.location}/>
                <div className="flex gap-5 items-center flex-wrap my-5">
                    <div className="text-[1.1rem]">Bedrooms: <span className="font-bold">{prop.details.bedrooms}</span></div>
                    <div className="text-[1.1rem]">Bathrooms: <span className="font-bold">{prop.details.bathrooms}</span></div>
                    <div className="text-[1.1rem]">Area: <span className="font-bold">{prop.details.area} m<sup>2</sup></span></div>
                    <div className="text-[1.1rem]">Floor: <span className="font-bold">{prop.details.floor}{prop.type !== 'Luxury Villa' && 'th'}</span></div>
                    <div className="text-[1.1rem]">Parking: <span className="font-bold">{prop.details.parking} {prop.type === 'Luxury Villa'?' spots':' cars'}</span></div>
                </div>
                <hr/>
                <ScheduleBtn link={prop.link} style={'my-5 mx-auto'}/>
            </>}
        </div>
    )
}

export default PropertyCard