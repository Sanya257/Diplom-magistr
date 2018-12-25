import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import TopMenu from "../pages/menu/topMenu/TopMenu";
import SideMenu from "../pages/menu/sideMenu/SideMenu";
const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            if(localStorage.getItem('checkUser')){
                return (
                    <div>
                        <SideMenu/>
                        <TopMenu/>
                        <Component {...matchProps}  />
                    </div>
                );

            }else {
                return <Redirect to='/login' />
            }
        }} />
    )
};
export default DefaultLayout;