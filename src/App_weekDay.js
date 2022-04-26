import { useState } from "react";
import React from "react";

function App() {
    const initDate = {
        year: 2025,
        month: 12,
        day: 31,
    }
    const callDay = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const [date, setDate] = useState(initDate);

    const nowDay = new Date(date.year, date.month, date.day).getDay();
    function correctDate(prop, e) {
        setDate({ ...date, ...{ [prop]: e.target.value } })
    }


    return (
        <>
            <input value={date.year} onChange={(e) => correctDate('year', e)}></input>
            <input value={date.month} onChange={(e) => correctDate('month', e)}></input>
            <input value={date.day} onChange={(e) => correctDate('day', e)}></input>
            <div>{callDay[nowDay]}</div>
        </>
    )
}

export default App