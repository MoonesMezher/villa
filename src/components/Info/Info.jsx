import { FaFileContract, FaHouseUser, FaMapMarked, FaPaypal, FaSave } from "react-icons/fa"
import InfoItem from "./InfoItem";

const Info = () => {
    const items = [
        {
            icon: <FaMapMarked className="text-__orange text-5xl"/>,
            title: '250 m2',
            subtitle: 'Total Flat Space',
        },
        {
            icon: <FaFileContract className="text-__orange text-5xl"/>,
            title: 'Contract',
            subtitle: 'Contract Ready',
        },
        {
            icon: <FaPaypal className="text-__orange text-5xl"/>,
            title: 'Payment',
            subtitle: 'Payment',
            underIcon: 'Process',
        },
        {
            icon: <FaHouseUser className="text-__orange text-5xl"/>,
            title: 'Safety',
            subtitle: '24/7 Under',
            underIcon: 'Control',
        }
    ];

    return (
        <div className="bg-white rounded-md shadow-md md:shadow-black h-fit">
            {items.map((el, i) => 
                <>
                    {i != 0 && <hr/>}
                    <InfoItem key={i} icon={el.icon} subtitle={el.subtitle} title={el.title} underIcon={el.underIcon} />
                </>
            )}
        </div>
    )
}

export default Info;