import { default as React } from 'react';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story04.scss';

export const Story04 = () => {
	const currentAudio = useAudio(Assets.mp3_story4);

    const styleSheet = document.styleSheets[0];
	const keyframes = 
	`@-webkit-keyframes doctor {
        0% {-webkit-transform: translateX(50vw) rotate(10deg) translateY(20px); } 
        50% {-webkit-transform: rotate(-5deg) translateY(20px); } 
        100% {-webkit-transform: translateX(70px) translateY(20px); }
    }`;
	styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

	return (
		<div className="story04">
			<Header/>
			<img alt="Zon" className="story04__sun" src={Assets.Sun}></img>
			<img alt="Vogel" className="story04__bird" src={Assets.Bird}></img>
			<img alt="Zieke tak" className="story04__tree" src={Assets.TreeSickBranch}></img>
			<img alt="Snuitertje" className="story04__snuitertje" src={Assets.SnuitertjeBasic}></img>
			<img alt="Dokter" className="story04__doctor" src={Assets.DoctorStetoscope} style={{animation: 'doctor ease-in-out 30s forwards'}}></img>

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

