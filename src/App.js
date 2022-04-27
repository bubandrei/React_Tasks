import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

function getInintObj() {
  return {
    id: nanoid(),
    name: '',
    catg: '',
    cost: ''
  }
}


const initProds = [
  { id: nanoid(), name: 'prod1111222', catg: 'catg1', cost: 100 },
  { id: nanoid(), name: 'prod2222333', catg: 'catg2', cost: 200 },
  { id: nanoid(), name: 'prod3333444', catg: 'catg3', cost: 300 },
];
function App() {
  const [note, setNote] = useState(initProds);
  const [editID, setEditId] = useState(null);
  const [obj, setObj] = useState(getInintObj())

  let tab = note.map((item) => {
    return (
      <>
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.catg}</td>
          <td>{item.cost}</td>
          <button onClick={() => setEditId(item.id)}>Edit</button>
          <button onClick={() => remItem(item.id)}>Remove</button>
        </tr>
      </>
    )
  })
  function remItem(id) {
    setNote(note.filter(item => item.id !== id))
  }
  function changeProp(prop, e) {
    if (editID) {
      setNote(note.map(item => item.id === editID ? { ...item, [prop]: e.target.value } : item))
    } else {
      setObj({ ...obj, [prop]: e.target.value })
    }

  }
  function getValue(prop) {
    if (editID) {
      return note.reduce((res, item) => item.id === editID ? item[prop] : res, '')
    } else {
      return obj[prop];
    }
  }
  function saveNote() {
    if (editID) {
      setEditId(null)
    } else {
      setNote([...note, obj]);
      setObj(getInintObj());
    }

  }

  return (
    <>
      <table>
        <tbody>
          {tab}
        </tbody>
      </table>
      <input value={getValue('name')} onChange={(e) => changeProp('name', e)}></input>
      <input value={getValue('catg')} onChange={(e) => changeProp('catg', e)}></input>
      <input value={getValue('cost')} onChange={(e) => changeProp('cost', e)}></input>
      <button onClick={() => saveNote()}>Save</button>
    </>
  )
}
export default App








///version 2 multiple input//////////////////////////////////////////////
// function getInintObj() {
//   return {
//     id: nanoid(),
//     name: '',
//     catg: '',
//     cost: ''
//   }
// }
// const initProds = [
//   { id: nanoid(), name: 'prod1111222', catg: 'catg1', cost: 100 },
//   { id: nanoid(), name: 'prod2222333', catg: 'catg2', cost: 200 },
//   { id: nanoid(), name: 'prod3333444', catg: 'catg3', cost: 300 },
// ];
// function App() {
//   const [note, setNote] = useState(initProds);
//   const [obj, setObj] = useState(getInintObj());

//   let tab = note.map((item) => {
//     return (
//       <>
//         <tr key={item.id}>
//           <td>{item.name}</td>
//           <td>{item.catg}</td>
//           <td>{item.cost}</td>
//           <button onClick={() => remItem(item.id)}>Remove</button>
//         </tr>
//       </>
//     )
//   })
//   function remItem(id) {
//     setNote(note.filter(item => item.id !== id))
//   }
//   function changeProp(prop, e) {
//     setObj({ ...obj, [prop]: e.target.value })
//   }
//   function saveNote() {
//     setNote([...note, obj]);
//     setObj(getInintObj());
//   }
//   return (
//     <>
//       <table>
//         <tbody>
//           {tab}
//         </tbody>
//       </table>
//       <input value={obj.name} onChange={(e) => changeProp('name', e)}></input>
//       <input value={obj.catg} onChange={(e) => changeProp('catg', e)}></input>
//       <input value={obj.cost} onChange={(e) => changeProp('cost', e)}></input>
//       <button onClick={saveNote}>Save</button>
//     </>
//   )
// }
// export default App
/////////////////////////////////////////////////////////////////////////////////////////





//multiple inputs//////////////////////////////////////////////////////////////////////////////
// const initProds = [
//   { id: nanoid(), name: 'prod1111222', catg: 'catg1', cost: 100 },
//   { id: nanoid(), name: 'prod2222333', catg: 'catg2', cost: 200 },
//   { id: nanoid(), name: 'prod3333444', catg: 'catg3', cost: 300 },
// ];

// function App() {
//   const [note, setNote] = useState(initProds);
//   const [value1, setValue1] = useState();
//   const [value2, setValue2] = useState();
//   const [value3, setValue3] = useState();


//   let tab = note.map((item) => {
//     return (
//       <>
//         <tr key={item.id}>
//           <td>{item.name}</td>
//           <td>{item.catg}</td>
//           <td>{item.cost}</td>
//           <button onClick={() => remItem(item.id)}>Remove</button>
//         </tr>

//       </>
//     )
//   })
//   function remItem(id) {
//     setNote(note.filter(item => item.id !== id))
//   }
//   function saveNote() {
//     let obj = {
//       id: nanoid(),
//       name: value1,
//       catg: value2,
//       cost: value3
//     };
//     setNote([...note, obj]);
//     setValue1('');
//     setValue2('');
//     setValue3('');
//   }
//   return (
//     <>
//       <table>
//         <tbody>
//           {tab}
//         </tbody>
//       </table>
//       <input value={value1} onChange={(e) => setValue1(e.target.value)}></input>
//       <input value={value2} onChange={(e) => setValue2(e.target.value)}></input>
//       <input value={value3} onChange={(e) => setValue3(e.target.value)}></input>
//       <button onClick={saveNote}>Save</button>
//     </>
//   )
// }
// ////////////////////////////////////////////////////////////////////////////////////////
// export default App