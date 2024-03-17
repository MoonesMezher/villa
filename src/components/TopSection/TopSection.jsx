import { IoIosMail, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoMdFlame } from "react-icons/io";
import TopSectionItem from "./TopSectionItem";
import SocialMediaIcon from "../SocialMediaIcon/SocialMediaIcon";

const TopSection = ({isScroll}) => {
    const iconsSocialMedia = [
        {
            href: 'https://www.facebook.com/', element: <IoLogoFacebook className="text-white font-bold"/>
        },
        {
            href: 'https://www.x.com/', element: <IoLogoTwitter className="text-white font-bold"/>
        },
        {
            href: 'https://www.linkedin.com/', element: <IoLogoLinkedin className="text-white font-bold"/>
        },
        {
            href: 'https://www.instagram.com/', element: <IoLogoInstagram className="text-white font-bold"/>
        }
    ];

    const info = [
        {
            icon: <IoIosMail className="text-__orange text-[1.8rem]" />,
            text: 'info@company.com'
        },
        {
            icon: <IoMdFlame className="text-__orange text-[1.8rem]" />,
            text: 'Sunny Isles Beach, FL 33160'
        }
    ]
    
    return (
        <div className={`hidden ${isScroll?'hidden':'min-[991px]:flex'} justify-between items-center p-4 bg-white md:mx-7`}>
            <ul className="flex gap-5 items-center">
                {info.map((item, i) => <TopSectionItem key={i} item={item} index={i}/>)}
            </ul>
            <ul className="flex justify-between items-center gap-2">
                {iconsSocialMedia.map((item, i) => <SocialMediaIcon key={i} item={item}/>)}
            </ul>
        </div>
    )
}

export default TopSection