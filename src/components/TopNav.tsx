import React, { useEffect } from 'react';
import './TopNav.scss';
import logo from '../logo.png';

function TopNav({ onNavChange, activeView }: any) {

    useEffect(() => {
        handleOnLoadTransition();
    }, []);

    const handleOnLoadTransition = () => {
        const logo = document.getElementById('logo');
        const navContainer = document.getElementById('nav-container');
        const logoText = document.getElementById('logoText');
        const navbarNav = document.getElementById('navbarNav');
        const navToggle = document.getElementById('nav-toggle');
        setTimeout(() => {
            logo && logo.classList.add('transitioning');
            navContainer && navContainer.classList.add('transitioning');
            logoText && logoText.classList.add('d-none');
        }, 1000);
        setTimeout(() => {
            logo && logo.classList.remove('initial');
            navContainer && navContainer.classList.remove('initial');
            navContainer && navContainer.classList.remove('transitioning');
            navbarNav && navbarNav.classList.remove('invisible');
            navToggle && navToggle.classList.remove('invisible');
        }, 4000);
    }

    function getClass(view: string): string {
        return view === activeView ? 'active' : '';
    };

    return (
        <nav id="nav" className="navbar navbar-expand-sm navbar-light bg-light">
            <div id="nav-container" className="container-lg initial">

                <a className="navbar-brand" href="./">
                    <img id="logo" alt="logo" src={logo} className="d-inline-block align-text-top initial" />
                    <span id="logoText">BILLSEYE</span>
                </a>

                <button id="nav-toggle" className="navbar-toggler invisible" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="navbarNav" className="collapse navbar-collapse invisible">
                    <ul className="navbar-nav">
                        <li className="nav-item d-sm-none" onClick={() => onNavChange('addgame')}>
                            <a className={`nav-link ${getClass('addgame')}`}>Add Game</a>
                        </li>
                        <li className="nav-item" onClick={() => onNavChange('gamehistory')}>
                            <a className={`nav-link ${getClass('gamehistory')}`}>Game History</a>
                        </li>
                        <li className="nav-item" onClick={() => onNavChange('leaderboard')}>
                            <a className={`nav-link ${getClass('leaderboard')}`}>Leaderboard</a>
                        </li>
                        <li className="nav-item d-none" onClick={() => onNavChange('groups')}>
                            <a className={`nav-link ${getClass('groups')}`}>Groups</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default TopNav;
