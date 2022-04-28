import React, { useState } from "react";

function UserField({ id, text, type, editUser }) {
    const [isEdit, setEdit] = useState(false)
    return (<div>{
        isEdit ?
            <input value={text}
                onChange={(e) => editUser(id, type, e)}
                onBlur={() => setEdit(false)} ></input>
            : <span onClick={() => setEdit(true)}>{text}</span>}
    </div >
    )
}
export default UserField