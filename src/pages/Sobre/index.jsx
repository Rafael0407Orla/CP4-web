import Text from "../../Components/Text";
import Button from "../../Components/Button";
import heroImageSobre from "../../assets/heroImageSobre.png"
import "./styles.css"

function Sobre() {
    return (  
        <div className="hero-image-section">
        <div className="hero-image-section-textContainer">
        <Text  type={"h1"} text={"Bem-vindo à revolução dos vídeos!"}/>
        <Text  type={"h4"} text={"Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores."}/>
         <Button label="Baixe o app" />
        </div>
        <img width={"50%"} height={480} src={heroImageSobre}/>
    </div>
    );
}

export default Sobre;