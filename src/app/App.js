import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { RouteWithLayout } from './utilities';
import * as Pages from './pages';
import * as Routes from './routes';
import * as Layouts from './layouts';

import { Story } from "./pages/story/Story";

import './app.scss';

const App = () => {
  return (
    <div className="App">
      <Router basename="/">
        <Switch >
          <Route path="/story/:id" component={Story} />
          
          <RouteWithLayout exact path={Routes.MENU} component={Pages.Menu} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.THOUGHTS} component={Pages.Thoughts} layout={Layouts.StoryLightLayout} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
