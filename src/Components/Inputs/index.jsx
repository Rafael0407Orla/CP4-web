import "./styles.css"

function Input({ type = "text", showLabel = true, placeholder, label, orientation = "row" }) {
    return (

        <div className="InputContainer" style={{ flexDirection: orientation }}>
            {showLabel && (<label>{label}</label>)}

            {type == "textArea" ?
                <textarea placeholder={placeholder} rows="5" /> :
                <input type={type} placeholder={placeholder} />
            }
        </div>
    );
}

export default Input;