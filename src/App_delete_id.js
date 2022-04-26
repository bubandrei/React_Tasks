import React from "react";
import { useState } from "react";

const initNotes = [
    {
        id: 'GYi9G_uC4gBF1e2SixDvu',
        prop1: 'value11-',
        prop2: 'value12-',
        prop3: 'value13',
    },
    {
        id: 'IWSpfBPSV3SXgRF87uO74',
        prop1: 'value21-',
        prop2: 'value22-',
        prop3: 'value23',
    },
    {
        id: 'JAmjRlfQT8rLTm5tG2m1L',
        prop1: 'value31-',
        prop2: 'value32-',
        prop3: 'value33',
    },
];
const id = 'IWSpfBPSV3SXgRF87uO74';

function App() {
    const [notes, setNotes] = useState(initNotes);
    const list = notes.map((item) => {
        return (
            <div key={item.id}>
                <span>{item.prop1}</span>
                <span>{item.prop2}</span>
                <span>{item.prop3}</span>
            </div>
        )
    })
    function deleteID(pas) {
        setNotes(notes.filter(item => item.id !== pas))
    }


    return (
        <>
            {list}
            <button onClick={() => deleteID(id)}>Remove</button>
        </>
    )
}
export default App