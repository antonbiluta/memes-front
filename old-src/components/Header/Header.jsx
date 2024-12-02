import React from 'react';
import './Header.css'

const Header = ({title}) => {
    return (
        <header className="header">
            <div className='left-side'>
                <div className="logo">
                    {title}
                </div>
            </div>
            <div className="right-part">
                <nav className="navigation">
                    <ul>
                        <li><a href="/hot">Hot</a></li>
                        <li><a href="/fresh">Fresh</a></li>
                        <li><a href="/random">Random</a></li>
                        <li><a href="/topics">Topics</a></li>
                    </ul>
                </nav>
                <div className="user-profile">
                    <img src="" alt="Profile" />
                </div>
            </div>
        </header>
    );
};

export default Header