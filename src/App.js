import React, { useState } from "react";
import User from "./components_Test/User";
import { nanoid } from "nanoid";

const initUsers = [
    { id: nanoid(), name: 'user1', age: 30, isEdit: false },
    { id: nanoid(), name: 'user2', age: 31, isEdit: false },
    { id: nanoid(), name: 'user3', age: 32, isEdit: false },
];

function App() {
    const [users, setUser] = useState(initUsers);

    function editUser(id, field, e) {
        setUser(users.map(user => {
            if (user.id === id) {
                user[field] = e.target.value;
            }
            return user
        }))

    }
    const result = users.map((user) => {
        return (
            <User key={user.id}
                id={user.id}
                name={user.name}
                age={user.age}
                isEdit={user.isEdit}
                editUser={editUser} />
        )
    })
    return (
        <>
            {result}
        </>
    )
}
export default App