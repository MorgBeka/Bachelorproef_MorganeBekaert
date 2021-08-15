import { default as React } from 'react';
import * as Images from '../../assets';
import { Button, SnuitertjeLeg } from '../../components';
import { hasSavedStory, getSavedStory } from "../../utilities/currentPage";

import './menu.scss';

const Menu = () => {
	return (
		<div className="menu">

			<img alt="boom" className="menu__tree" src={Images.TreeStartWithousSnuiter}></img>
			<SnuitertjeLeg/>

			<div className="menu__wrapper">
				<Button text="START VERHAAL" path="/story/0" />
				{hasSavedStory() && <Button text="LEES VERDER" path={`/story/${getSavedStory()}`} />}
 				<Button text="MIJN GEDACHTEN" path="/thoughts" />
			</div>

		</div>
	)
}

export default Menu;
