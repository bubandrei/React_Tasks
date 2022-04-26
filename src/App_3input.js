import React, { useState } from "react";

const App = () => {

    const [surname, setSurname] = useState();
    const [name, setName] = useState();
    const [name2, setName2] = useState();
    const [set, setState] = useState();

    let firstInput = (event) => setSurname(
        event.target.value
    );
    let secondInput = (event) => setName(
        event.target.value
    );
    let thirdInput = (event) => setName2(
        event.target.value
    );

    let summary = () => setState(
       `${surname} ${name} ${name2}`
    )

    return (
        <div>
            <div>Hello</div>
            <input type="text" onChange={firstInput}></input>
            <input type="text" onChange={secondInput}></input>
            <input type="text" onChange={thirdInput}></input>
            <button onClick={summary}>VALUE</button>
            <div>Result: {set}</div>

        </div>

    )
}
export default App