const TopSectionItem = ({item, index}) => {
    return (<li className="flex items-center gap-2">
            {item && item.icon}
            <span className="text-neutral-400">{item && item.text}</span>
            {index == 0 && <span className="text-neutral-400">|</span>}
        </li>)
}


export default TopSectionItem