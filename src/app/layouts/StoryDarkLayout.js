import { default as React } from 'react';
import * as Images from '../assets';

import './layout.scss';

const StoryDarkLayout = ({children}) => {
  return (
    <div className="story-dark">

		<div className="story-dark__main">
	      	{children}
		</div>

		<img alt="Donkere lucht" className="story-dark__background" src={Images.BackgroundDark}></img>
	    
	</div>
  );
};

export default StoryDarkLayout;
