import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";


const initProds = [
  { id: nanoid(), name: 'prod1', catg: 'catg1', cost: 100 },
  { id: nanoid(), name: 'prod2', catg: 'catg2', cost: 200 },
  { id: nanoid(), name: 'prod3', catg: 'catg3', cost: 300 },
];


function App() {
  let tab = initProds.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.catg}</td>
        <td>{item.cost}</td>
      </tr>
    )
  })
  return (
    <>
      <table>
        <tbody>
          {tab}
        </tbody>
      </table>
    </>
  )
}

export default App