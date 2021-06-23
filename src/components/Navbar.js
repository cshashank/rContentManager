import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to="/marathi">Marathi </Link>
            <Link to="/english">English </Link>
        </div>
    )
}
