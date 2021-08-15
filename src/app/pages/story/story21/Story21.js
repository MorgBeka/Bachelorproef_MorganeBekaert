import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer, Sunshine } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story21.scss';

export const Story21 = () => {
	const history = useHistory();

	const currentAudio = useAudio(Assets.mp3_story21);

	return (
		<div className="story21">
			<Header/>
			<Sunshine/>		
			<img alt="Genezen Grote Boom" className="story21__tree" src={Assets.TreeCuredWithoutSwing}></img>
			<img alt="Schommel" className="story21__swing" src={Assets.Swing}></img>
			<img alt="Schaap en konijn" className="story21__sheepBunnny" src={Assets.SheepBunny}></img>
			<img alt="Bokaal met boompje" className="story21__jar" src={Assets.JarWithTree}></img>

			<p className="story21__text">
			Elke dag worden de takken van Grote Boom een beetje sterker.
			Grote Boom kan de schommel van Snuiter weer dragen. Iedereen is blij.
			Snuiter schommelt vrolijk heen en weer. 
			‘Ik wist het wel, hoor,’ zegt hij tegen Grote Boom, 
			‘jij bent de sterkste boom van het hele bos!’
			</p>
			<p className="story21__text2">
			En in de pot groeit ondertussen een Kleine Boom…
			</p>

			<Footer currentAudio={currentAudio} />

		</div>
	)
}
