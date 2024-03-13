const Heading = ({text, style}) => {
    return (
        <h1 className={`font-bold text-[1.2rem] text-left ${style}`}>{text}</h1>        
    )
}

export default Heading