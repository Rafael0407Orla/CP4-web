import Text from "../../Components/Text";
import Button from "../../Components/Button";
import heroImageSobre from "../../assets/heroImageSobre.png";
import "./styles.css";
import CardsPlanos from "../../Components/CardsPlanos";
import content1 from "../../assets/plano1content.png";
import content2 from "../../assets/plano2content.png";
import content3 from "../../assets/plano3content.png";

function Sobre() {
  const cardData = [
    {
      text: "Individual",
      headerColor: "#6975E8",
      labelButton: "Cadastrar",
      typeButton: "secondary",
      img: content1,
    },
    {
      text: "Individual",
      headerColor: "#fff",
      labelButton: "Cadastrar",
      typeButton: "tertiary",
      img: content2,
    },
    {
      text: "Individual",
      headerColor: "#fff",
      labelButton: "Cadastrar",
      typeButton: "tertiary",
      img: content3,
    },
  ];

  return (
    <div className="container">
      <div className="hero-image-section-sobre">
        <div className="hero-image-section-textContainer">
          <Text type={"h1"} text={"Bem-vindo à revolução dos vídeos!"} />
          <Text
            type={"h4"}
            text={
              "Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores."
            }
          />
          <Button label="Baixe o app" type={"primary"} />
        </div>
        <img width={"50%"} height={480} src={heroImageSobre} />
      </div>
      <Text text={"Planos"} type={"h3"} />
      <div className="containerPlanos">
        {cardData.map((props, index) => (
          <CardsPlanos key={index} {...props} />
        ))}
      </div>
    </div>
  );
}

export default Sobre;
