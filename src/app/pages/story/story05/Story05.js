import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story05.scss';

export const Story05 = () => {
	const history = useHistory();

	const currentAudio = useAudio(Assets.mp3_story5);


	const styleSheet = document.styleSheets[0];
	const moon = 
	`@-webkit-keyframes moon {
        0% {-webkit-transform: translateX(-40px) translateY(-200px); } 
        100% {-webkit-transform: translateX(0) translateY(40px); }
    }`;
	styleSheet.insertRule(moon, styleSheet.cssRules.length);
	
	const sun = 
	`@-webkit-keyframes sun {
        0% {-webkit-transform: translateX(0) translateY(0); }
        100% {-webkit-transform: translateX(290px) translateY(100px); } 
    }`;
	styleSheet.insertRule(sun, styleSheet.cssRules.length);

	const dawn = 
	`@-webkit-keyframes dawn {
        0% {opacity: 0; }
        100% {opacity: 0.6; } 
    }`;
	styleSheet.insertRule(dawn, styleSheet.cssRules.length);


	return (
		<div className="story05">

			<Header/>

			<div className="story05__dawn" style={{animation: 'dawn linear 15s forwards'}}></div>
			<img alt="Zon" className="story05__sun" src={Assets.Sun} style={{animation: 'sun linear 10s forwards'}}></img>
			<img alt="Maan" className="story05__moon" src={Assets.Moon} style={{animation: 'moon ease-in-out 16s forwards'}}></img>
			<img alt="Vogel" className="story05__bird" src={Assets.Bird} ></img>
			<img alt="Grote Boom" className="story05__tree" src={Assets.TreeSickBranch}></img>
			<img alt="Snuitertje" className="story05__snuitertje" src={Assets.SnuitertjeBasic}></img>
			<img alt="Deken" className="story05__blanket" src={Assets.Blanket}></img>


			<div className="story05__wrapper">
				<p>Het is al laat als de dokter vertrekt.
				Het wordt donker in het bos. Snuitertje slaapt dicht bij
				Grote Boom, zo is hij zeker niet alleen. 
				</p>
			</div>
			

			<img alt="Ga verder" className="story05__arrow" src={Assets.ArrowNext2} onClick={ () => history.push('/story/6') }></img>


			<Footer currentAudio={currentAudio} />

		</div>
	)
}

