import React from 'react';
import Logo from '../Logo/logo';
import classes from './SideDrawer.css';
import NaviagtionItems from '../Navigation/NavigationItems/NavigationItems';
const sideDrawer=(props)=>{

    return(
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
            <Logo/>
            </div>
          
            <nav>
            <NaviagtionItems/>
            </nav>
          
        </div>
    )

}
export default sideDrawer;