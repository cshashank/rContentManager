import React, { useState, useEffect } from 'react'

export default function MarathiPoems() {
    localStorage.setItem('poemURL', 'marathi1');
    const [items, setItems] = useState([{}])
    useEffect(() => {
        const tempUrl = localStorage.getItem('poemURL');
        fetch('data/marathiDb.json'
            , {
                "headers": {
                    "ContentType": "application/json",
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(data =>{
                setItems(data)
                console.log(' setting data  '+ data)
            });
    },[]);

    return (
        <div>
            Marathi poems links {items[0].name}
            {items.map((item,index) => (
                <div key={index}>
                    <h3>{item.name} </h3>
                </div>
            ))}
        </div>
    );
}
