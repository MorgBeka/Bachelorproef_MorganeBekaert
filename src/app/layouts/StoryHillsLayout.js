import { default as React } from 'react';
import * as Images from '../assets';

import './layout.scss';

const StoryHillsLayout = ({children}) => {
  return (
    <div className="story-hills">

		<div className="story-hills__main">
	      	{children}
		</div>

		<img alt="Heuvels" className="story-hills__background" src={Images.BackgroundHills}></img>
	    
	</div>
  );
};

export default StoryHillsLayout;
