import ScheduleBtn from "../Buttons/ScheduleBtn/ScheduleBtn"

const Deal = ({deal}) => {
    return (
        <div className="flex justify-center gap-10 max-[1100px]:flex-col">
            {deal && <>
                <ul className="list-item basis-[25%] bg-white rounded-md shadow-md shadow-black p-6 h-fit">
                    {deal.details.map((detail, i) => <li key={i}>
                        {i !== 0 && <div className="w-full h-[1px] bg-neutral-200 flex-shrink-0"/>}
                        <div className="flex justify-between items-center gap-5 p-4 max-[400px]:flex-col">
                            <span className="text-neutral-400">{detail.type}</span>
                            <h1 className="font-bold text-[1.5rem]">{detail.value}</h1>
                        </div>
                    </li>)}
                </ul>
                <div className="basis-[40%]">
                    <img src={deal.img} alt={deal.img} className="w-full h-full object-cover"/>
                </div>
                <div className="basis-[25%]">
                    <h1 className="text-[1.2rem]">{deal.info.title}</h1>
                    <p className="text-neutral-400 leading-8 my-10">{deal.info.discription.split('|').map((e, i) => <>{e} {i == 0 && <><br/><br/></>}</>)}</p>
                    <ScheduleBtn icon={true} link={deal.info.link}/>
                </div>
            </>}
            </div>
    )
}

export default Deal