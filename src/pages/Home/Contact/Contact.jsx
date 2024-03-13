import ImageBlurLanding from "../../../components/ImageBlurLanding/ImageBlurLanding";
import bgImg from '../../../assets/imgs/deal-01.jpg'
import { FaMailBulk, FaPhone } from "react-icons/fa";
import Form from "../../../components/Form/Form";
import Map from "../../../components/Map/Map";
import ContactBoxes from "../../../components/ContactBoxes/ContactBoxes";

const Contact = () => {
    const items = [
        {
            icon: <FaPhone className="text-__orange text-5xl"/>,
            title: '010-020-0340',
            subtitle: 'Phone Number',
        },
        {
            icon: <FaMailBulk className="text-__orange text-5xl"/>,
            title: 'info@villa.co',
            subtitle: 'Business Email',
        }
    ];

    const inputItems = [
        {
            label: 'Full Name',
            name: 'name',
            type: 'text',
            isTextarea: false,
            placeholder: 'Your Name',
        },
        {
            label: 'Email Address',
            name: 'email',
            type: 'email',
            isTextarea: false,
            placeholder: 'Your E-Mail',
        },
        {
            label: 'Subject',
            name: 'namsubjecte',
            type: 'text',
            isTextarea: false,
            placeholder: 'Your Subject...',
        },
        {
            label: 'Message',
            name: 'message',
            type: null,
            isTextarea: true,
            placeholder: 'Your Message...',
        }
    ]

    const map = {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.56568508434!2d-74.26445793411291!3d40.73138423962544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C%20NJ%2C%20USA!5e0!3m2!1sen!2s!4v1710056349637!5m2!1sen!2s"
    }

    return (
        <div className="relative">
            <ImageBlurLanding img={bgImg} title={'CONTACT US'} discription={'Get Closer View & Different Feeling'}>
                <div className="flex justify-center gap-10 w-[90%] max-[767px]:w-full relative left-[50%] top-[-5em] translate-x-[-50%] max-[1200px]:flex-col">
                    <div className="basis-[45%] flex flex-col justify-between gap-10 max-[1200px]:basis-full">
                        <div className="h-[250px] min-[1200px]:h-full">
                            <Map src={map.src}/>
                        </div>
                        <div className="flex justify-between items-center gap-5 max-[767px]:flex-col">
                            {items.map((item, i) => <ContactBoxes key={i} item={item}/>)}
                        </div>
                    </div>
                    <Form inputItems={inputItems}/>
                </div>
            </ImageBlurLanding>
        </div>
    )
}

export default Contact