import React from 'react';
import './App.css';
import NotFound from './components/pages/NotFound'
import {Route, Switch} from 'react-router-dom'
import Home from './components/pages/home/Home'
import Statistics from './components/pages/statistics/Statistics'
import SideMenu from "./components/pages/menu/sideMenu/SideMenu";
import TopMenu from "./components/pages/menu/topMenu/TopMenu";
class App extends React.Component {


    render() {
        return (
              <>
                  <SideMenu/>
                  <TopMenu/>
                  <div>
                      <Switch>
                          <Route exact path='/' component={Home}/>
                          <Route exact path='/statistics' component={Statistics}/>
                          <Route component={NotFound}/>
                      </Switch>
                  </div>
                  </>
        );
    }
}

export default App;
