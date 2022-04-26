import React, { useState } from "react";

const App = () => {
    let [state, setState] = useState(['Коля', 'Вася', 'Петя', 'Иван', 'Дима'])

    console.log(state)
    function handleRemove(index) {
        state.splice(index, 1);
        return (
            setState(state => [...state])
        )
    }
    let y = state.map((el, index) => {
        console.log(el, index)
        return (
            <li key={index}>
                {el}
                <button onClick={() => handleRemove(index)}>Remove{index}</button>
            </li>
        )
    })

    return (
        <span>
            <ul>
                {y}
            </ul>
            <button onClick={() => setState(state => [...state, "newValue"])}>Click</button>
        </span>

    )
}
export default App