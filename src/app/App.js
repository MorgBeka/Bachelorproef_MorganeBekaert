import React, {createContext, useState} from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { RouteWithLayout } from './utilities';
import * as Pages from './pages';
import * as Routes from './routes';
import * as Layouts from './layouts';

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
          <RouteWithLayout exact path={Routes.STORY_00} component={Pages.Story00} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_01} component={Pages.Story01} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_02} component={Pages.Story02} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_03} component={Pages.Story03} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_04} component={Pages.Story04} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_05} component={Pages.Story05} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_06} component={Pages.Story06} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_07} component={Pages.Story07} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_08} component={Pages.Story08} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_09} component={Pages.Story09} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_10} component={Pages.Story10} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_11} component={Pages.Story11} layout={Layouts.StoryDarkLayout} />
          <RouteWithLayout exact path={Routes.STORY_12} component={Pages.Story12} layout={Layouts.StoryDarkLayout} />
          <RouteWithLayout exact path={Routes.STORY_13} component={Pages.Story13} layout={Layouts.StoryDarkLayout} />
          <RouteWithLayout exact path={Routes.STORY_14} component={Pages.Story14} layout={Layouts.StoryDarkLayout} />
          <RouteWithLayout exact path={Routes.STORY_15} component={Pages.Story15} layout={Layouts.StoryRiverLayout} />
          <RouteWithLayout exact path={Routes.STORY_16} component={Pages.Story16} layout={Layouts.StoryHillsLayout} />
          <RouteWithLayout exact path={Routes.STORY_17} component={Pages.Story17} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_18} component={Pages.Story18} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_19} component={Pages.Story19} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_20} component={Pages.Story20} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.STORY_21} component={Pages.Story21} layout={Layouts.StoryLightLayout} />
          
          <RouteWithLayout exact path={Routes.MENU} component={Pages.Menu} layout={Layouts.StoryLightLayout} />
          <RouteWithLayout exact path={Routes.THOUGHTS} component={Pages.Thoughts} layout={Layouts.StoryLightLayout} />
        </Switch>
      </Router>
      </ProgressionStoryContext.Provider>

    </div>
  );
}

export default App;
