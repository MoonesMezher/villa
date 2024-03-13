const Container = ({children, style}) => {
    return (
        <section className={`w-full h-full md:px-2 ${style}`}>{children}</section>
    )
}

export default Container