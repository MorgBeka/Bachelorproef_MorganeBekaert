import { default as React } from 'react';
import * as Assets from '../../../assets';
import { Header, Footer, Sunshine } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story16.scss';

export const Story16 = () => {


	const currentAudio = useAudio(Assets.mp3_story16);

	return (
		<div className="story16">
			<Header/>
			<Sunshine/>
			<img alt="Zieke Grote Boom met sjaal" className="story16__tree" src={Assets.SickTreeSharp}></img>
			<img alt="Snuitertje" className="story16__snuitertje" src={Assets.SnuitertjeBlanket}></img>
			<img alt="Dokter" className="story16__doctor" src={Assets.DoctorStand}></img>

			<p className="story16__text">
			Maar dan komt de dokter alweer. Met nieuwe medicijnen.
			En Grote Boom wordt weer heel moe en slap. Er zitten nog altijd veel steentjes in de pot.
			‘Kan ik iets doen voor Grote Boom?’ vraagt Snuiter aan de dokter.
			‘Niet zoveel. Speel maar gewoon stilletjes in de buurt. 
			Zo voelt Grote Boom zich minder alleen.’
			Grote Boom is erg moe. Snuiter legt een dekentje over de wortels.
			</p>


			<Footer currentAudio={currentAudio} />

		</div>
	)
}
