import "./styles.css";
import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";

function Lesson04() {
    const showMessage = () => {
        alert("Func outer click");
    };

    const showCustomMessage = (name) => {
        alert(`Function outer click - ${name}`);
    };

    return (
        <div className="lesson04-wrapper">
            <Counter />
            <div className="buttons-wrapper">
                {/* Пример 1 использования функции - создание функции внутри кнопки*/}
                <Button
                    buttonName="Button with inner f"
                    onClick={() => {
                        alert("Func inner");
                    }}
                />
                {/* Пример 2 использования функции - создание функции вне кнопки*/}
                <Button
                    buttonName="Button with outer f"
                    onClick={showMessage}
                />
                {/* Пример 3 использования функции - создание функции вне кнопки c парметрами*/}
                <Button
                    buttonName="Button with parametrs"
                    onClick={() => {
                        showCustomMessage("Bob");
                    }}
                />
            </div>
        </div>
    );
}

export default Lesson04;
