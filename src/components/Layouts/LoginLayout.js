import React from 'react';
import {Route,Redirect} from 'react-router-dom';
const LoginLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            if(localStorage.getItem('checkUser')){
                return <Redirect to='/' />

            }else {
                return (
                    <Component {...matchProps}  />
                );
            }
        }} />
    )
};
export default LoginLayout;