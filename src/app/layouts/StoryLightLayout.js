import { default as React } from 'react';
import * as Images from '../assets';

import './layout.scss';

const StoryLightLayout = ({children}) => {
  return (
    <div className="story-light">

		<div className="story-light__main">
	      	{children}
		</div>

		<img alt="Blauwe lucht" className="story-light__background" src={Images.BackgroundLight}></img>
	    
	</div>
  );
};

export default StoryLightLayout;
