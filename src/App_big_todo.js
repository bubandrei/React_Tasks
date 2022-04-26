import React, { useState, useRef } from "react";
import { nanoid } from 'nanoid';
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { useLinkClickHandler } from "react-router-dom";
import { cleanup } from "@testing-library/react";

// let randomId = nanoid()

function App() {
    const [note, setNotes] = useState([1, 2, 3, 4, 5]);
    const [value, setValue] = useState(null);
    const [addValue, setAddValue] = useState('')

    const list = note.map((item, index) => {
        return (
            <li key={index} onClick={() => setValue(index)}>{item}</li>
        )
    })
    function setOldText(e) {
        setNotes([...note.slice(0, value), e.target.value, ...note.slice(value + 1)])
    }
    function clearInput() {
        setValue(null)
    }
    function newAdd(e) {
        setAddValue(e.target.value)
    }
    function createText() {
        setNotes([...note, addValue])
        setAddValue('')
    }

    let input;
    if (value) {
        input = <input value={note[value]}
            onChange={(e) => setOldText(e)}
            onBlur={() => clearInput()}
        ></input>
    } else {
        input = <input value={addValue} onChange={(e) => newAdd(e)} onBlur={() => createText()}></input>
    }

    return (
        <>
            <ul>
                {list}
            </ul>
            {input}
        </>
    )

}



export default App


