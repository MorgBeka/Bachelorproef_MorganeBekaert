import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';

import './story16.scss';

export const Story16 = () => {

	const styleSheet = document.styleSheets[0];
	const keyframes = 
	`@-webkit-keyframes doctor {
        0% {-webkit-transform: translateX(0); } 
        100% {-webkit-transform: translateX(-45vw) translateY(180px); }
    }`;
	styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


	return (
		<div className="story16">
			<Header/>
			<img alt="Zon" className="story08__sun" src={Assets.Sun}></img>
			<img alt="Zieke Grote Boom met sjaal" className="story16__tree" src={Assets.SickTreeSharp}></img>
			<img alt="Snuitertje" className="story16__snuitertje" src={Assets.SnuitertjeBlanket}></img>
			<img alt="Dokter" className="story16__doctor" src={Assets.DoctorStand} style={{animation: 'doctor ease-in 20s forwards'}}></img>
			
			<p className="story16__text">
			Maar dan komt de dokter alweer. Met nieuwe medicijnen.
			En Grote Boom wordt weer heel moe en slap. Er zitten nog altijd veel steentjes in de pot.
			‘Kan ik iets doen voor Grote Boom?’ vraagt Snuiter aan de dokter.
			‘Niet zoveel. Speel maar gewoon stilletjes in de buurt. 
			Zo voelt Grote Boom zich minder alleen.’
			Grote Boom is erg moe. Snuiter legt een dekentje over de wortels.
			</p>


			<Footer audio={Assets.mp3_story16} />

		</div>
	)
}
