import Item from "./Item";

const FeaturedItems = () => {
    const items = [
        {
            count: 34,
            title: 'Buildings. Finished Now',
        },
        {
            count: 14,
            title: 'Years. Experience',
        },
        {
            count: 24,
            title: 'Awwards. Won 2023',
        }
    ];

    return (
        <div className="flex max-[1170px]:flex-col justify-center items-center gap-16">
            {items.map((item, i) => <Item key={i} count={item.count} title={item.title} />)}
        </div>
    )
}

export default FeaturedItems