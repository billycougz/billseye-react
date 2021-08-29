import React, {useEffect} from 'react';
import './TopNav.scss';
import logo from '../logo.png';

function TopNav() {
    useEffect(() => {
        handleOnLoadTransition();
    });

    const handleOnLoadTransition = () => {
        setTimeout(() => {
            const header = document.getElementById('header');
            if (header) {
                header.classList.add('transitioned');
            }
        }, 1000);
        setTimeout(() => {
            const header = document.getElementById('top-nav');
            if (header) {
                header.style.display = 'inline-block';
            }
        }, 4000);
    }

    return (
        <header id="header" className="mb-3 container-fluid">
            <a href="./">
                <img id="logo" alt="logo" src={logo} />
                <div id="logoText">BILLSEYE</div>
            </a>
            <div id="top-nav">
                <ul className="nav nav-pills">
                    <li role="presentation" className="active"><a onClick={() => null}>Game History</a></li>
                    <li role="presentation"><a onClick={() => null}>Leaderboard</a></li>
                    <li role="presentation"><a onClick={() => null} id="groups-button">Groups</a></li>
                </ul>
            </div>
            <button id="addAppButton" className="btn btn-info" type="button" >Add Mobile App</button>
        </header>
    );
}

export default TopNav;
