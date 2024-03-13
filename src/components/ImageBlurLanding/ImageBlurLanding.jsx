import Title from "../Title/Title"

const ImageBlurLanding = ({img, title, discription, children}) => {
    return (
        <div className='relative w-full'>
            <img className={'w-full blur-sm h-[500px] object-cover'} src={img} alt={img}/>
            <div className='absolute left-[50%] top-[10%] translate-x-[-50%] z-30 text-center'>
                <Title title={title} discription={discription} style={'text-white'}/>
            </div>
            {children}
        </div>
    )
}

export default ImageBlurLanding