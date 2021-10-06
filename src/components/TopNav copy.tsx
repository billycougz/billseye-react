import React, { useEffect } from 'react';
import './TopNav.scss';
import logo from '../logo.png';

function TopNav({ onNavChange, activeView }: any) {

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
            const topNav = document.getElementById('top-nav');
            if (topNav) {
                topNav.classList.add('d-sm-inline-block');
            }
            const addAppButton = document.getElementById('addAppButton');
            if (addAppButton) {
                addAppButton.classList.add('d-lg-none');
                addAppButton.classList.remove('d-none');
            }
        }, 4000);
    }

    function getClass(view: string): string {
        return view === activeView ? 'active' : '';
    };

    return (
        <header id="header" className="mb-3 container-fluid">
            <a href="./">
                <img id="logo" alt="logo" src={logo} />
                <div id="logoText">BILLSEYE</div>
            </a>
            <div id="top-nav" className="d-none">
                <ul className="nav nav-pills">
                    <li role="presentation" className={getClass('gamehistory')} onClick={() => onNavChange('gamehistory')}><a>Game History</a></li>
                    <li role="presentation" className={getClass('leaderboard')} onClick={() => onNavChange('leaderboard')}><a>Leaderboard</a></li>
                    <li role="presentation" className={getClass('groups')} onClick={() => onNavChange('groups')}><a id="groups-button">Groups</a></li>
                </ul>
            </div>
            <button id="addAppButton" className="btn btn-info d-none" type="button" >Install App</button>
        </header>
    );
}

export default TopNav;
