import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const styles = ({ isActive }) => ({ color: isActive ? '#ECD444' : '#f0f8ff'});
import './index.css'
const PageWrapper = () => {
    return <>
        <header>
            <nav>
                <NavLink to="/" style={styles}>Home</NavLink>
                <NavLink to="/characters" style={styles}>Characters</NavLink>
                <NavLink to="/fight" style={styles}>Fight</NavLink>
            </nav>
        </header>
        <Outlet />
    </>
};

export default PageWrapper;
