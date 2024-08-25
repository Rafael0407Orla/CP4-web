import "./styles.css";

function Text({ type, text }) {
  const elements = {
    h1: <h1>{text}</h1>,
    h3: <h3>{text}</h3>,
    h4: <h4>{text}</h4>,
  };

  const Typograph = elements[type];

  return Typograph;
}

export default Text;
