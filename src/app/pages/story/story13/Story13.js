import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story13.scss';

export const Story13 = () => {
	const history = useHistory();

	const currentAudio = useAudio(Assets.mp3_story13);

	return (
		<div className="story13">
			<Header/>
			<img alt="Zieke Grote Boom" className="story13__tree" src={Assets.SickTree}></img>
			<img alt="Snuitertje" className="story13__snuitertje" src={Assets.SnuitertjeBasic}></img>
			<img alt="Schaap Bessie met sjaal" className="story13__sheep" src={Assets.SheepSharp}></img>
			
			
			<p className="story13__text">
			Gelukkig komt schaapje Bessie op bezoek. 
			Ze heeft een cadeautje bij zich voor Grote Boom. Een wollen sjaal!
			‘Die is gemaakt van mijn eigen vacht’, zegt Bessie.
			Snuiter begrijpt het niet.
			</p>

			<p className="story13__text2">
			'Ieder jaar scheren de mensen me kaal. 
			Dan maken ze mooie dingen van mijn wol. 
			De eerste keer dat ik kaal en bloot rondliep,
			was ik verdrietig. 
			Maar mijn schapenkrulletjes kwamen
			vanzelf terug. 
			Grote Boom zal ook wel weer nieuwe blaadjes
			krijgen!’
			‘En nu is er een warme sjaal!’ roept Snuiter uit.
			Samen hangen ze de sjaal tussen 
			de takken van Grote Boom.
			Grote boom voelt zich meteen een beetje beter.
			</p>

			<img alt="Ga verder" className="story13__arrow" src={Assets.ArrowNext} onClick={ () => history.push('/story/14') }></img>

			<Footer currentAudio={currentAudio} />

		</div>
	)
}

