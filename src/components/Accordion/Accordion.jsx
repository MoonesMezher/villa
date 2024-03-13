import { useState } from 'react';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (i) => {
        setActiveIndex((prev) => (prev === i ? null : i));
    };

    const items = [
        {
            title: 'Best useful links ?',
            content: 'Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.',
        },
        {
            title: 'How does this work ?',
            content: 'Dolor almesit amet, consectetur adipiscing elit, sed doesnot eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            title: 'Why is Villa Agency the best ?',
            content: 'Dolor almesit amet, consectetur adipiscing elit, sed doesnot eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        }
    ]

    return (
        <ul className='list-item bg-neutral-100 rounded-md mt-10 duration-500 w-[30em] max-[768px]:w-full'>
            {items.map((el, i) => (
                <li key={i} >
                    { i != 0 && <div className='w-full bg-neutral-300 h-[1px]'/>}
                    <div className={`p-5 text-xl cursor-pointer duration-200 hover:text-__orange ${activeIndex === i && 'text-__orange'}`} onClick={() => toggleAccordion(i)}>{el.title}</div>
                    {activeIndex === i && (
                        <div className={`p-3 duration-1000 transition-all first-letter:text-__orange first-letter:font-bold first-letter:text-xl`}>{el.content}</div>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default Accordion