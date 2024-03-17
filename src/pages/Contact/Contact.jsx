import { FaMailBulk, FaPhone } from 'react-icons/fa'
import Container from '../../components/Container/Container'
import Form from '../../components/Form/Form'
import Hero from '../../components/Hero/Hero'
import Map from '../../components/Map/Map'
import Title from '../../components/Title/Title'
import ContactBoxes from '../../components/ContactBoxes/ContactBoxes'

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

    const map = {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.56568508434!2d-74.26445793411291!3d40.73138423962544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C%20NJ%2C%20USA!5e0!3m2!1sen!2s!4v1710056349637!5m2!1sen!2s"
    }

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

    return (
        <div>
            <Hero/>
            <Container style={'py-20 md:px-10 max-[991px]:px-10 max-[400px]:px-2'}>
                <div className='flex justify-center gap-10 mb-20 max-[1100px]:flex-col'>
                    <div className='basis-[45%]'>
                        <Title title={'CONTACT US'} discription={'Get In Touch With Our Agents'} style={'mx-auto md:m-[0]'}/>
                        <p className='my-10 leading-8'>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
                        <div className="flex justify-between gap-5 flex-col">
                            {items.map((item, i) => <ContactBoxes key={i} item={item}/>)}
                        </div>
                    </div>
                    <Form inputItems={inputItems}/>
                </div>
                <div className='h-[550px] px-2 min-[1200px]:px-10'>
                    <Map src={map.src}/>
                </div>
            </Container>
        </div>
    )
}

export default Contact