import React from 'react';
import {Route} from 'react-router-dom';

const LoginLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {


                return <Component {...matchProps}  />

        }}/>
    )
};
export default LoginLayout;