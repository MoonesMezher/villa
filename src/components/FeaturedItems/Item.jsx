import { useEffect, useState } from "react"

const Items = ({count, title}) => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('video-view');
                if (element && window.scrollY >= element.offsetTop) {
                    let i = 0;
                    const interval = setInterval(() => {
                        setIndex(i);
                        i++;
                        if (i > count) {
                            clearInterval(interval);
                        }
                    }, 100);
                    window.removeEventListener('scroll', handleScroll);
                }
                console.log(element && (element.offsetTop + '|' + window.scrollY));
            };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className="box flex justify-between items-center gap-5 py-7 px-10 bg-__white_pink rounded-md relative w-[18em] max-[640px]:flex-col max-[640px]:text-center max-[400px]:w-[12em]">
            <span className="circle text-__orange font-bold text-5xl">{index}</span>
            <p className="text-black font-bold text-[1.1rem]">{title.split('.').map((e) => <>{e}<br/></>)}</p>
            <span className="bg-__orange rounded-full w-12 h-12 absolute right-0 top-0 translate-x-[50%] translate-y-[-50%]"/>
        </div>
    )
}

export default Items