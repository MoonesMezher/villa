import videoImg from '../../../assets/imgs/video-frame.jpg';
import bgImg from '../../../assets/imgs/video-bg.jpg';
import FeaturedItems from '../../../components/FeaturedItems/FeaturedItems';
import { FaPlay } from 'react-icons/fa';
import ImageBlurLanding from '../../../components/ImageBlurLanding/ImageBlurLanding';

const VideoView = () => {
    return (
        <div className='relative'>
            <ImageBlurLanding img={bgImg} title={'VIDEO VIEW'} discription={'Get Closer View & Different Feeling'}>
                <div className='absolute w-[50em] max-[810px]:w-[95%] left-[50%] translate-x-[-50%] bottom-[0] translate-y-[50%] overflow-hidden rounded-md'>
                    <img className={'w-full h-full object-cover'} src={videoImg} alt={videoImg}/>
                    <a href={'https://www.youtube.com/watch?v=fNjstF6lzqA'} className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-3 min-[400px]:p-4 sm:p-6 rounded-full outline-[8px] min-[400px]:outline-[10px] sm:outline-[16px] outline-__white_orange outline w-fit cursor-pointer'>
                        <FaPlay className='text-__orange max-[400px]:text-[.7rem]'/>
                    </a>
                </div>
            </ImageBlurLanding>
            <div className='w-full bg-white pb-28 mt-56'>
                <FeaturedItems/>
            </div>
        </div>
    )
}

export default VideoView