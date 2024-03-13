import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from '../../assets/imgs/Premium Photo _ Luxurious Modern Villa with Pool at Twilight.jpeg'
import Img2 from '../../assets/imgs/Lake House Idea.jpeg'
import Img3 from '../../assets/imgs/Dark contrast Modern Mansion.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.css'

const SwiperComponent = () => {
    const imgs = [
        {
            src: Img1,
            content: {
                location: 'Toronto, Canada',
                title: 'HURRY!.GET THE. BEST VILLA. FOR YOU',
            },
        },
        {
            src: Img2,
            content: {
                location: 'Melbourne, Australia',
                title: 'BE QUICK!. GET THE. BEST VILLA. IN TOWN',
            },
        },
        {
            src: Img3,
            content: {
                location: 'Miami, South Florida',
                title: 'ACT NOW!. GET THE. HIGHEST. LEVEL. PENTHOUSE',
            },            
        }
    ];

    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        className='swiper-added-style'
        >
        {imgs.map((img, i) => <SwiperSlide key={i} className='swiper-swiperslide'>
            <img className='swiper-swiperslide-img' src={img.src} alt={img.src}/>
            <div className='swiper-swiperslide-content-center'>
                <p className='swiper-swiperslide-content-center-location'>{img.content.location.split(',').map((e, i) => i==0?e+', ':<span key={i} className='text-__orange'>{e}</span>)}</p>
                <p className='swiper-swiperslide-content-center-title'>{img.content.title.split('.').map((e, i) => <span key={i}>{e}<br/></span>)}</p>
            </div>
            <div className='swiper-swiperslide-overlay'/>
        </SwiperSlide>)}
        </Swiper>
    );
}

export default SwiperComponent