import Button from "../../Components/Button";
import Card from "../../Components/Cards";
import "./styles.css";
import heroImage from "../../assets/heroImage.png"
import youtubeIcon from "../../assets/youtubeIcon.png"
import tiktokIcon from "../../assets/tiktokIcon.png"
import facebookIcon from "../../assets/facebookIcon.png"
import instagramIcon from "../../assets/instagramicon.png"
import Text from "../../Components/Text";
function Home() {
    return ( 
        <>
        <div className="hero-image-section">
            <div className="hero-image-section-textContainer">
            <Text  type={"h1"} text={"Crie seus vídeos online"}/>
            <Text  type={"h4"} text={"Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade."}/>
             <Button label="Começar agora!" />
            </div>
            <img width={"50%"} height={460} src={heroImage}/>
        </div>
        <div className="card-contianer">
        <Card color="#F1C2B0"  title={"Youtube"} description="Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo." number="01" icon={youtubeIcon} />
        <Card color="#F9EB98"  title="Tiktok" description="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok." number="02" icon={tiktokIcon}/>
        <Card color="#C0D9DD"  title="Facebook" description="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook." number="03" icon={facebookIcon}/>
        <Card color="#6975E8"  title="Instagram" description="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels. " number="04" icon={instagramIcon}/>    
        </div>
        </>
     );
}

export default Home;