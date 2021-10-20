import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/marathi">Marathi </Link>
            <Link to="/english">English </Link>
            <Link to="/hindi">Hindi </Link>
        </div>
    )
}
