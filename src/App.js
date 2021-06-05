import React from 'react';
import './assets/scss/main.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Onboarding from './components/Layouts/onboarding/Onboarding';
import { navArray } from './components/shared/TopNavConstants';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/dashboard" component={Dashboard} />
        <Route path="/" render={()=>(
          <Switch>
            <Onboarding> 
                {
                  navArray.map((navs, index)=>(
                    <Route exact path={navs.path} key={ `navItem$` + index  } component={navs.component} />
                  ))
                }
            </Onboarding>
          </Switch>
          )}/>
        </Switch>
    </BrowserRouter>
  )
}
export default App;
