const SocialMediaIcon = ({item}) => {
    return (
        <li className="bg-neutral-400 rounded-full p-2 duration-300 cursor-pointer hover:bg-__orange">
            <a href={item.href}>
                {item.element}
            </a>
        </li>
    )
}

export default SocialMediaIcon