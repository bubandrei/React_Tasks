import React, { useState } from "react";

const App = () => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [set, setState] = useState(0);

    let firstInput = (event) => setNumber1(
        event.target.value
    );
    let secondInput = (event) => setNumber2(
        event.target.value
    );
    let sum = () => setState(
       Number(number1) + Number(number2)
    )

    return (
        <div>
            <div>Hello</div>
            <input type="number" onChange={firstInput}></input>
            <input type="number" onChange={secondInput}></input>
            <button onClick={sum}>VALUE</button>
            <div>Итого: {set}</div>

        </div>

    )
}
export default App