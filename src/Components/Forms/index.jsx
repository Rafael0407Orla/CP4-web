import Input from "../Inputs";
import "./styles.css"
function Forms() {
    return (
        <form >
            <Input type="text" placeholder={"Name"} label={"Name:"} />
            <Input type="text" placeholder={"Email"} label={"E-mail:"} />
            <Input type="textArea" placeholder={"Message"} label={"Message:"} orientation="column" />
            <input className="forms-submit" type="submit" value="Enviar" />
        </form>
    );
}

export default Forms;