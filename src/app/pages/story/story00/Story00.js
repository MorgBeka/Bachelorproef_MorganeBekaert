import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header } from '../../../components';

import './story00.scss';

export const Story00 = () => {
	const history = useHistory();

	return (
		<div className="story00">
			<Header/>
			<div className="story00__wrapper">
				<h1>Draai je Ipad om, zo zal je het verhaal van Snuitertje beter kunnen lezen! </h1>
				<img alt="draai scherm" className="story00__wrapper-turn" src={Assets.TurnScreen}></img>

			</div>
			<img alt="Grote Boom" className="story00__tree" src={Assets.TreeStartWithousSnuiter}></img>
			<img alt="Been Snuitertje" className="story00__snuitertje-leg" src={Assets.Leg}></img>
			<img alt="Snuitertje" className="story00__snuitertje" src={Assets.SnuitertjeWithoutLeg}></img>

			<img alt="Ga verder" className="story00__arrow" src={Assets.ArrowNext2} onClick={ () => history.push('/story/1') }></img>

		</div>
	)
}
