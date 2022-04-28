import React, { useState } from "react";
import { nanoid } from "nanoid";

const initNotes = [
    { text: 'note1', isEdit: false },
    { text: 'note2', isEdit: false },
    { text: 'note3', isEdit: false },
];
function App() {
    const [value, setValue] = useState(initNotes);

    const text = value.map((note, index) => {
        let input;
        if (!note.isEdit) {
            input = <li key={index}>{note.text}  <button onClick={() => setEdit(index)}>Click</button></li>
        } else {
            input = <li key={index}><input value={note.text} onChange={(e) => editText(index, e)}></input>
                <button onClick={() => setDiv(index)}>Click</button></li>
        }
        return input
    }
    )
    function editText(index, e) {
        const copy = Object.assign([], value);
        copy[index].text = e.target.value;
        setValue(copy)
    }

    function setEdit(index) {
        const copy = Object.assign([], value)
        copy[index].isEdit = true;
        setValue(copy)
    }
    function setDiv(index){
        const copy = Object.assign([], value)
        copy[index].isEdit = false;
        setValue(copy)
    }

    return (
        <>
            <ul>
                {text}
            </ul>

        </>
    )
}
export default App






// function App() {
//     const [value, setValue] = useState('text');
//     const [isEdit, setIsEdit] = useState(false);

//     let elem;
//     if (isEdit) {
//         elem = <input value={value} onChange={(e) => setValue(e.target.value)}></input>
//     } else {
//         elem = value;
//     }
//     function save() {
//         setIsEdit(false)
//     }

//     return (
//         <>
//             <span>{elem}</span>
//             <button onClick={() => setIsEdit(true)}>input</button>
//             <button onClick={() => save()}>const</button>
//         </>
//     )

// }
// export default App






































// show describe and commit button////////////////////////////////////////////////
// const initProds = [
//     {
//         id: nanoid(),
//         name: 'prod1',
//         cost: 'cost1',
//         desc: 'long description 1',
//         comm: 'my super comment 1',
//         showDesc: false,
//         showCom: false
//     },
//     {
//         id: nanoid(),
//         name: 'prod2',
//         cost: 'cost2',
//         desc: 'long description 2',
//         comm: 'my super comment 2',
//         showDesc: false,
//         showCom: false
//     },
//     {
//         id: nanoid(),
//         name: 'prod3',
//         cost: 'cost3',
//         desc: 'long description 3',
//         comm: 'my super comment 3',
//         showDesc: false,
//         showCommit: false
//     },
// ];
// function App() {
//     const [notes, setNotes] = useState(initProds);

//     function show(id) {
//         setNotes(notes.map(note => {
//             if (note.id === id) {
//                 return { ...note, showDesc: !note.showDesc }
//             } else {
//                 return note
//             }
//         }))
//     }
//     function showCom(id) {
//         setNotes(notes.map(note => {
//             if (note.id === id) {
//                 return { ...note, showCommit: !note.showCommit }
//             } else {
//                 return note
//             }
//         }))
//     }
//     const result = notes.map((note => {
//         let desc;
//         let commit;
//         if (note.showDesc) {
//             desc = <span>{note.desc}</span>
//         }
//         if (note.showCommit) {
//             commit = <span>{note.comm}</span>
//         }
//         return <li key={note.id}>{note.name}{note.cost}
//             <button onClick={() => show(note.id)}>Describe</button>
//             <button onClick={() => showCom(note.id)}>Commet</button>
//             <div>{desc}</div>
//             <div>{commit}</div>
//         </li>
//     }))

//     return (
//         <>
//             <ul>
//                 {result}
//             </ul>
//         </>
//     )
// }
// export default App
///////////////////////////////////////////////////////////////////////////////////////////////////