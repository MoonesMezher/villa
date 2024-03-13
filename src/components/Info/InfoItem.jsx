const InfoItem = ({icon, underIcon, title, subtitle, style}) => {
    return (
        <div className={`flex gap-16 items-center px-5 py-8 w-full ${style}`}>
            <div className="flex flex-col gap-2">
                {icon}
                {underIcon && <span className="text-neutral-400">{underIcon}</span>}
            </div>
            <div>
                <h1 className="font-bold text-2xl mb-2 block">{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>)
}

export default InfoItem