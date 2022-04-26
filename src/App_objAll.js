import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';

// let newId = nanoid();

const initNotes = [
    {
        id: 'GYi9G_uC4gBF1e2SixDvu',
        prop1: 'value11',
        prop2: 'value12',
        prop3: 'value13',
    },
    {
        id: 'IWSpfBPSV3SXgRF87uO74',
        prop1: 'value21',
        prop2: 'value22',
        prop3: 'value23',
    },
    {
        id: 'JAmjRlfQT8rLTm5tG2m1L',
        prop1: 'value31',
        prop2: 'value32',
        prop3: 'value33',
    },
];
const id = 'IWSpfBPSV3SXgRF87uO74';
const newElem = {
    id: 'GMNCZnFT4rbBP6cirA0Ha',
    prop1: 'value41',
    prop2: 'value42',
    prop3: 'value43',
}
const data = {
    id: 'JAmjRlfQT8rLTm5tG2m1L',
    prop1: 'value21 !',
    prop2: 'value22 !',
    prop3: 'value23 !',
};
const newId = 'IWSpfBPSV3SXgRF87uO74';
const prop = 'prop1';
const prop2 = 'prop3';
const value = '!!!';
const iddd = 'JAmjRlfQT8rLTm5tG2m1L';
const propp = 'prop2';





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
    function addElem() {
        newElem.id = nanoid();
        setNotes([...notes, newElem])
    }
    function changeElem() {
        setNotes(notes.map(item => {
            if (item.id == data.id) {
                return data
            } else {
                return item
            }
        }))
    }
    function changeOneEl() {
        setNotes(notes.map(notes => {
            if (notes.id === newId) {
                return { ...notes, [prop]: notes.prop1 + value, [prop2]: notes.prop3 + value }
            } else {
                return notes
            }
        }))
    }
    const [newText2, setNewText] = useState();
    function showResult() {
        setNewText(notes.reduce((res, item) => item.id === iddd ? item[propp] : res, ''))

    }
    return (
        <>
            {list}
            <button onClick={() => deleteID(id)}>Remove</button>
            <button onClick={() => addElem()}>Add</button>
            <button onClick={() => changeElem()}>Change</button>
            <button onClick={() => changeOneEl()}>Change One Item</button>
            <button onClick={() => showResult()}>Show result</button>
            <div>{newText2}</div>
        </>
    )
}
export default App