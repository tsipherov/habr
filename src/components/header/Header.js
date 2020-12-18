import React from 'react'
import logo from './logo.svg';
import './header.css'


const Header = () => {
    return (
        <header className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Tsiferov Sergio</h1>
        </header>
    )
}

export default Header
