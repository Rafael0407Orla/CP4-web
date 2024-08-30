import Button from "../../Components/Button";
import Card from "../../Components/Cards";
import Text from "../../Components/Text";
import facebookIcon from "../../assets/facebookIcon.png";
import heroImage from "../../assets/heroImage.png";
import instagramIcon from "../../assets/instagramIcon.png";
import tiktokIcon from "../../assets/tiktokIcon.png";
import youtubeIcon from "../../assets/youtubeIcon.png";
import "./styles.css";
function Home() {
  const cardData = [
    {
      color: "#F1C2B0",
      title: "Youtube",
      description: "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
      number: "01",
      icon: youtubeIcon
    },
    {
      color: "#F9EB98",
      title: "Tiktok",
      description: "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
      number: "02",
      icon: tiktokIcon
    },
    {
      color: "#C0D9DD",
      title: "Facebook",
      description: "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
      number: "03",
      icon: facebookIcon
    },
    {
      color: "#6975E8",
      title: "Instagram",
      description: "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
      number: "04",
      icon: instagramIcon
    }
  ];



  return (
    <>
      <div className="hero-image-section">
        <div className="hero-image-section-textContainer">
          <Text type={"h1"} text={"Crie seus vídeos online"} />
          <Text
            type={"h4"}
            text={
              "Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade."
            }
          />
          <Button label="Começar agora!" type={"primary"} />
        </div>
        <img width={"50%"} height={460} src={heroImage} />
      </div>
      <div className="card-contianer">
        {cardData.map((card, index) => (
          <Card
            key={index}
            color={card.color}
            title={card.title}
            description={card.description}
            number={card.number}
            icon={card.icon}
          />
        ))}


      </div>
    </>
  );
}

export default Home;
