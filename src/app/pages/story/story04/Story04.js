import { default as React } from 'react';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story04.scss';

export const Story04 = () => {
	const currentAudio = useAudio(Assets.mp3_story4);

	return (
		<div className="story04">
			<Header/>
			<img alt="Zon" className="story04__sun" src={Assets.Sun}></img>
			<img alt="Vogel" className="story04__bird" src={Assets.Bird}></img>
			<img alt="Zieke tak" className="story04__tree" src={Assets.TreeSickBranch}></img>
			<img alt="Been Snuitertje" className="story04__snuitertje-leg" src={Assets.Leg}></img>
			<img alt="Snuitertje" className="story04__snuitertje" src={Assets.SnuitertjeWithoutLeg}></img>
			<img alt="Dokter" className="story04__doctor" src={Assets.DoctorStetoscope}></img>

			<p className="story04__text">
			Op een dag komt de dokter in het bos. 
			Hij komt alle bomen bekijken. Ook Grote Boom.
			De dokter trekt een ernstig gezicht. 
			Hij zegt tegen Grote Boom:‘Ik heb slecht nieuws. 
			Er wonen houtwormpjes onder de schors van één van je takken.'
			<br></br><br></br>
			Snuiter heeft nog nooit van houtwormpjes gehoord. 
			Maar het klinkt heel ernstig. Snuiter moet er van huilen.
			De dokter probeert Snuiter te troosten: ‘Ik ga mijn best doen
			om de houtwormpjes te verjagen.'
			</p>

			<Footer currentAudio={currentAudio} />

		</div>
	)
}

