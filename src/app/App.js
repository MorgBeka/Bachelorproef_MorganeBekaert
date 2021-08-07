import React, {createContext, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { RouteWithLayout } from './utilities';
import * as Pages from './pages';
import * as Routes from './routes';
import * as Layouts from './layouts';

import { Story } from "./pages/story/Story";

import './app.scss';

export const ProgressionStoryContext = createContext(0)

const App = () => {
  const [story, setStory] = useState(0)

  const updateStory = (index) => {
    setStory(index)
  }
  
  return (
    <div className="App">
      <ProgressionStoryContext.Provider value={{story, updateStory}}>
      <Router basename="/">
        <Switch >
          <Route path="/story/:id" component={Story} />
          
          <RouteWithLayout exact path={Routes.MENU} component={Pages.Menu} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.THOUGHTS} component={Pages.Thoughts} layout={Layouts.StoryLightLayout} />
        </Switch>
      </Router>
      </ProgressionStoryContext.Provider>

    </div>
  );
}

export default App;
