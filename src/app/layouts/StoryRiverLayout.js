import { default as React } from 'react';
import * as Images from '../assets';

import './layout.scss';

const StoryRiverLayout = ({children}) => {
  return (
    <div className="story-river">

		<div className="story-river__main">
	      	{children}
		</div>

		<img alt="Rivier" className="story-light__background" src={Images.SkyRiver}></img>
	    
	</div>
  );
};

export default StoryRiverLayout;
