import "./styles.css"
function SocialMidiaIcons({img, link}) {
    return ( 
        <a className="socialMidiaAnchor" href={link}>
            <img src={img} />
        </a>
     );
}

export default SocialMidiaIcons;