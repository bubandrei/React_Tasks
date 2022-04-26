import React, { useState } from "react";
import inputHeader from './Header.module.css';

const Header = () => {

  const [area, setArea] = useState()

  let text = React.createRef();
  let addText = () => {
    let newText = text.current.value;
    let belowText = localStorage.setItem(1, newText)
    setArea(localStorage.getItem(1, belowText))
  }
  return (
    <header className={inputHeader.head}>
      <div className={inputHeader.center}>
        <input className={inputHeader.inputCenter} ref={text} type="text" placeholder="new text" />
        <button className={inputHeader.btn} onClick={addText} >Click!</button>
        <div className={inputHeader.text}>{area}</div>
      </div>
    </header>
  )
}
export default Header