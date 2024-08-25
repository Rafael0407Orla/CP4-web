import Input from "../../Components/Inputs";
import SocialMidiaIcons from "../../Components/SocialMediaIcons";
import Text from "../../Components/Text";
import twitter from "../../assets/twitterIcon.png"
import instagram from "../../assets/instagram.png"
import discord from "../../assets/discord.png"
import "./styles.css"
import Forms from "../../Components/Forms";
function Contato() {
    return (
        <div className="section">
            <div className="titleContainer">
                <Text type={"h1"} text={"Dúvidas e suporte, entre em contato:"} />
                <div className="socialMidiaContainer">
                    <SocialMidiaIcons img={twitter} />
                    <SocialMidiaIcons img={instagram} />
                    <SocialMidiaIcons img={discord} />
                </div>
            </div>
            <div className="formsContainer">
                <Forms />
            </div>
        </div>
    );
}

export default Contato;