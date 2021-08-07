import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story15.scss';

export const Story15 = () => {
	const history = useHistory();

	const currentAudio = useAudio(Assets.mp3_story15);

	return (
		<div className="story15">
			<Header/>
			<img alt="Grote steen" className="story15__bigStone" src={Assets.BigStone}></img>
			<img alt="Snuitertje" className="story15__snuitertje" src={Assets.SnuitertjeCrown}></img>
			<img alt="Snuitertje spiegelbeeld" className="story15__snuitertje2" src={Assets.SnuitertjeCrown}></img>
			<img alt="Steen" className="story15__stone" src={Assets.Stone}></img>
			
			<p className="story15__text">
			Het is een prachtige kroon geworden! Grote Boom is trots op Snuiter.
			De blaadjes staan Snuiter goed. Met de kroon op zijn hoofd
			huppelt Snuiter naar de rivier. Hij gaat het steentje van vandaag
			in het water gooien.
			Hij moet lachen om zijn spiegelbeeld in de rivier.
			Snuiter vindt dat Grote Boom er vandaag heel goed uit ziet.
			Nu zal Grote Boom wel snel genezen zijn, denkt Snuiter.
			</p>

			<img alt="Ga verder" className="story15__arrow" src={Assets.ArrowNext2 } onClick={ () => history.push('/story/16') }></img>


			<Footer currentAudio={currentAudio} />

		</div>
	)
}

