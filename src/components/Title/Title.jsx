const Title = ({title, discription, style}) => {
    return (
        <div>
            <p className="text-__orange uppercase font-bold mb-5 text-[1.1rem] max-[768px]:text-center">| {title}</p>
            <p className={`text-black text-4xl font-bold leading-snug max-[768px]:text-center max-[768px]:text-2xl w-[250px] mx-auto ${style || ''}`}>{discription}</p>
        </div>
    )
}

export default Title