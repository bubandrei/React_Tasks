import React from "react";
import UserField from "./EditUser";

function User({ id, name, age, editUser }) {
    return (
        <>
            <UserField
                id={id}
                text={name}
                type='name'
                editUser={editUser} />
            <UserField
                id={id}
                text={age}
                type='age'
                editUser={editUser} />
        </>
    )
}
export default User