import React, { useState } from "react";

const App = () => {
    const [set, setState] = useState()
    let date = new Date().getFullYear();
    let inText = ({target}) => setState(
        date - target.value.toUpperCase() 
    ) 
    return (
        <div>
            <div>Hello</div>
            <input type="number" onChange={inText}></input>
            <div>Фамилия: {set}</div>
            <div>Имя: {set}</div>
            <div>Отчество: {set}</div>
        </div>

    )
}
export default App