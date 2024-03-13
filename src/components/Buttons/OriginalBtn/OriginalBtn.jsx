const OriginalBtn = ({text, style}) => {
    return (
        <button className={`bg-black text-[1.1rem] text-white p-4 w-[10em] rounded-md duration-300 hover:bg-__orange focus:bg-__orange cursor-pointer ${style}`} value={text}>
            {text}
        </button>

    )
}

export default OriginalBtn