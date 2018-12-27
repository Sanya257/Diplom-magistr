import React from 'react';
import './App.css';
import NotFound from './components/pages/NotFound'
import {Route, Switch} from 'react-router-dom'
import Home from './components/pages/home/Home'
import Statistics from './components/pages/statistics/Statistics'
import Calendar from './components/pages/calendar/Calendar';
import Chat from './components/pages/chat/Chat';
import Users from './components/pages/users/Users';
import Settings from './components/pages/settings/Settings'
import Seo from './components/pages/teams/Seo';
import Ppc from './components/pages/teams/Ppc';
import Sales from './components/pages/teams/Sales';
import Smm from './components/pages/teams/Smm';
import Programmer from './components/pages/teams/Programmer';
import Designers from './components/pages/teams/Designers';
import Content from './components/pages/teams/Content';
import Register from './components/pages/register/Register';
import Login from './components/pages/login/Login';
import DefaultLayout from './components/Layouts/DefaultLayout';
import LoginLayout from "./components/Layouts/LoginLayout";
class App extends React.Component {
    render() {
        return (
            <>

                    <Switch>
                        <DefaultLayout exact path='/' component={Home}/>
                        <DefaultLayout exact path='/statistics' component={Statistics}/>
                        <DefaultLayout exact path='/calendar' component={Calendar}/>
                        <DefaultLayout exact path='/chat' component={Chat}/>
                        <DefaultLayout exact path='/users' component={Users}/>
                        <DefaultLayout exact path='/settings' component={Settings}/>
                        <DefaultLayout exact path='/seo-team' component={Seo}/>
                        <DefaultLayout exact path='/ppc-team' component={Ppc}/>
                        <DefaultLayout exact path='/smm-team' component={Smm}/>
                        <DefaultLayout exact path='/sales-team' component={Sales}/>
                        <DefaultLayout exact path='/content-team' component={Content}/>
                        <DefaultLayout exact path='/programmer' component={Programmer}/>
                        <DefaultLayout exact path='/design-team' component={Designers}/>
                        <Route exact path='/register' component={Register}/>
                        <LoginLayout exact path='/login' component={Login}/>
                        <DefaultLayout component={NotFound}/>
                    </Switch>
            </>
        );
    }
}
export default App;
