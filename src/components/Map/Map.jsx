const Map = ({src}) => {
    return (
        <iframe 
            src={src} 
            width="100%" 
            height="100%" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>                    
    )
}

export default Map