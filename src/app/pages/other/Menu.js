import { default as React } from 'react';
import * as Images from '../../assets';
import { Button } from '../../components';
import { hasSavedStory, getSavedStory } from "../../utilities/currentPage";

import './menu.scss';

const Menu = () => {
	return (
		<div className="menu">

			<img alt="boom" className="menu__tree" src={Images.TreeStartWithousSnuiter}></img>
			<img alt="Been Snuitertje" className="menu__snuitertje-leg" src={Images.Leg}></img>
			<img alt="Snuitertje" className="menu__snuitertje" src={Images.SnuitertjeWithoutLeg}></img>

			<div className="menu__wrapper">
				<Button text="START VERHAAL" path="/story/0" />
				{hasSavedStory() && <Button text="LEES VERDER" path={`/story/${getSavedStory()}`} />}
 				<Button text="MIJN GEDACHTEN" path="/thoughts" />
			</div>

		</div>
	)
}

export default Menu;
