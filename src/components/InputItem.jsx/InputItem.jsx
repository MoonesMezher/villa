const InputItem = ({label, placeholder, name, type, isTextarea}) => {
    return (
        <label className="my-5 block w-full">
            <p className="text-[1.1rem] mb-3 capitalize">{label}</p>
            {isTextarea
            ? <textarea name={name} placeholder={placeholder} className="rounded-[25px] w-full bg-__gray p-3 text-neutral-400 outline-__orange border-none min-h-[10em] max-h-[10em]"></textarea>            
            : <input type={type} name={name} placeholder={placeholder} className="rounded-[30px] w-full bg-__gray p-3 text-neutral-400 outline-__orange border-none"/>
            }
        </label>
)
}

export default InputItem