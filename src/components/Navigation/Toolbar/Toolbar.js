import React from 'react';
import Logo from '../../Logo/logo';
import NaviagtionItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css';
const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
                 <div>MENU</div>
            <div className={classes.Logo}>
                <Logo/>
            </div>


            <nav>
                <NaviagtionItems></NaviagtionItems>
            </nav>

        </header>
    )
}
export default toolbar;