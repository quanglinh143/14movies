import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
const Header = () => {
    return (
        <div className="header-container">
            <Link to="/" className="header-link" >
                ENTERTAINMENT
            </Link>
        </div>
        
    )
}

export default Header
