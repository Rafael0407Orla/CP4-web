import Button from "../Button";
import Text from "../Text";
import "./styles.css";

function CardsPlanos({ text, headerColor, labelButton, typeButton, img }) {
  return (
    <div className="card-planos">
      <div className="header-planos" style={{ backgroundColor: headerColor }}>
        <Text type={"h4"} text={text} />
      </div>
      <img src={img} className="image" />
      <Button label={labelButton} type={typeButton} style={{ width: "auto" }} />
    </div>
  );
}

export default CardsPlanos;
