import React, { useState, useEffect } from 'react'

const EnglishPoems=() =>{
    const [items, setItems] = useState([{}])
    useEffect(()=>{
        console.log(" use effect english poem");
    },[]);
    return (
        <div>
            English poems
        </div>
    )
}


export default EnglishPoems