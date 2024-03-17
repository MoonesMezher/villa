import { useState } from 'react'
import Img1 from '../../assets/imgs/banner-01.jpg'
import Img2 from '../../assets/imgs/banner-02.jpg'
import Img3 from '../../assets/imgs/banner-03.jpg'

const SwiperComponent = () => {
    const [slider, setSlider] = useState(0);

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
        <div className='rounded-md overflow-hidden transition-all duration-1000'>
            {imgs.map((img, i) => <div key={i} className={`w-full h-[95vh] relative ${i==slider?'block':'hidden opacity-50'} transition-[all] duration-700`}>
                <img className='w-full h-full object-cover aspect-square bg-top transition-[all] duration-700' src={img.src} alt={img.src}/>
                <div className='absolute top-[50%] translate-y-[-50%] left-[15%] z-30 duration-500'>
                    <p className='bg-white px-3 py-2 rounded-sm w-fit font-bold'>{img.content.location.split(',').map((e, i) => i==0?e+', ':<span key={i} className='text-__orange'>{e}</span>)}</p>
                    <p className='text-white mt-10 font-bold text-2xl sm:text-7xl'>{img.content.title.split('.').map((e, i) => <span key={i}>{e}<br/></span>)}</p>
                </div>
                <span
                    onClick={() => setSlider(slider > 0? slider-1: 2)}
                    className='absolute top-[50%] translate-y-[-50%] w-[3rem] h-[3rem] p-5 rounded-full duration-300 hover:bg-neutral-400 flex justify-center items-center cursor-pointer z-30 left-[5%] bg-[#73737366] text-white text-[2rem]'>{"<"}</span>
                <span 
                    onClick={() => setSlider(slider < 2? slider+1: 0)}
                    className='absolute top-[50%] translate-y-[-50%] w-[3rem] h-[3rem] p-5 rounded-full duration-300 hover:bg-neutral-400 flex justify-center items-center cursor-pointer z-30 right-[5%] bg-[#73737366] text-white text-[2rem]'>{">"}</span>
                <div className='absolute z-30 left-[50%] translate-x-[-50%] bottom-2 flex justify-center gap-4'>
                    {[0,1,2].map((e,i) => <span key={i} onClick={() => setSlider(i)} className={`w-4 h-4 rounded-full cursor-pointer ${i==slider ? 'bg-__orange' :'bg-white'}`}></span>)}
                </div>
                <div className='absolute left-0 top-0 w-full h-full z-20 bg-neutral-500 opacity-30'/>
            </div>)}
        </div>
    );
}

export default SwiperComponent