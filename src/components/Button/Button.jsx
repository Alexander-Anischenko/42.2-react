import "./styles.css";

//props ='значение по умолчанию(default)'
function Button({ buttonName = "Get" }) {
    //console.log(props);

    return <button className="main-button">{buttonName}</button>;
}

export default Button;
