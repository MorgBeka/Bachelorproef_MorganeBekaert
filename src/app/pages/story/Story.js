import { createElement, useEffect } from "react";
import { setCurrentStory } from "../../utilities/currentPage";
import { useParams } from "react-router-dom";
import { Story00} from './story00/Story00'
import { Story01 } from './story01/Story01'
import { Story02 } from './story02/Story02'
import { Story03 } from './story03/Story03'
import { Story04 } from './story04/Story04'
import { Story05 } from './story05/Story05'
import { Story06 } from './story06/Story06'
import { Story07 } from './story07/Story07'
import { Story08 } from './story08/Story08'
import { Story09 } from './story09/Story09'
import { Story10 } from './story10/Story10'
import { Story11 } from './story11/Story11'
import { Story12 } from './story12/Story12'
import { Story13 } from './story13/Story13'
import { Story14 } from './story14/Story14'
import { Story15 } from './story15/Story15'
import { Story16 } from './story16/Story16'
import { Story17 } from './story17/Story17'
import { Story18 } from './story18/Story18'
import { Story19 } from './story19/Story19'
import { Story20 } from './story20/Story20'
import { Story21 } from './story21/Story21'
import * as Layouts from '../../layouts';

const stories = {
  0: {
    component: Story00,
    layout: Layouts.StoryLightLayout
  },
  1: {
    component: Story01,
    layout: Layouts.StoryLightLayout
  },
  2: {
    component: Story02,
    layout: Layouts.StoryLightLayout
  },
  3: {
    component: Story03,
    layout: Layouts.StoryLightLayout
  },
  4: {
    component: Story04,
    layout: Layouts.StoryLightLayout
  },
  5: {
    component: Story05,
    layout: Layouts.StoryLightLayout
  },
  6: {
    component: Story06,
    layout: Layouts.StoryLightLayout
  },
  7: {
    component: Story07,
    layout: Layouts.StoryLightLayout
  },
  8: {
    component: Story08,
    layout: Layouts.StoryLightLayout
  },
  9: {
    component: Story09,
    layout: Layouts.StoryLightLayout
  },
  10: {
    component: Story10,
    layout: Layouts.StoryLightLayout
  },
  11: {
    component: Story11,
    layout: Layouts.StoryDarkLayout
  },
  12: {
    component: Story12,
    layout: Layouts.StoryDarkLayout
  },
  13: {
    component: Story13,
    layout: Layouts.StoryDarkLayout
  },
  14: {
    component: Story14,
    layout: Layouts.StoryDarkLayout
  },
  15: {
    component: Story15,
    layout: Layouts.StoryRiverLayout
  },
  16: {
    component: Story16,
    layout: Layouts.StoryHillsLayout
  },
  17: {
    component: Story17,
    layout: Layouts.StoryLightLayout
  },
  18: {
    component: Story18,
    layout: Layouts.StoryLightLayout
  },
  19: {
    component: Story19,
    layout: Layouts.StoryLightLayout
  },
  20: {
    component: Story20,
    layout: Layouts.StoryLightLayout
  },
  21: {
    component: Story21,
    layout: Layouts.StoryLightLayout
  },
}

export const Story = () => {

  const params = useParams();
  const current = stories[params.id]

  useEffect(() => {
    setCurrentStory(params.id)
  }, [params])

  return (
    <div>
      {current && createElement(current.layout, {
        children: createElement(current.component)
      })}
    </div>
  )
}
