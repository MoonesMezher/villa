import './loading.css'

const Loading = () => {
    return (
        <div className="w-full h-full fixed left-0 top-0 z-50 flex justify-center items-center bg-[#000000ce]">
            <div className="flex justify-center gap-3">
                <span className="h-5 w-5 bg-__orange rounded-full spin-animate-1"/>
                <span className="h-5 w-5 bg-__orange rounded-full spin-animate-2"/>
                <span className="h-5 w-5 bg-__orange rounded-full spin-animate-3"/>
            </div>
        </div>
    );
}

export default Loading;