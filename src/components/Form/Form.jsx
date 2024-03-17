import ScheduleBtn from "../Buttons/ScheduleBtn/ScheduleBtn"
import InputItem from "../InputItem/InputItem"

const Form = ({inputItems}) => {
    return (
        <form className="bg-white shadow-md shadow-black p-10 rounded-md basis-[45%] max-[1200px]:basis-full">
            {inputItems && inputItems.map((item, i) => <InputItem key={i} label={item.label} name={item.name} type={!item.isTextarea && item.type} isTextarea={item.isTextarea} placeholder={item.placeholder}/>)}
            <ScheduleBtn name={'Send Message'} style={'py-4'}/>
        </form>
    )
}

export default Form