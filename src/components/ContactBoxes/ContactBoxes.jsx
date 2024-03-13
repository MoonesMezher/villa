const ContactBoxes = ({item}) => {
    return (
        <div className={`flex gap-8 items-center p-5 bg-white rounded-md shadow-md shadow-black basis-[49%]`}>
            <div className="flex flex-col gap-2">
                {item.icon}
            </div>
            <div>
                <h1 className="font-bold text-xl mb-1">{item.title}</h1>
                <p>{item.subtitle}</p>
            </div>
        </div>
    )
}

export default ContactBoxes