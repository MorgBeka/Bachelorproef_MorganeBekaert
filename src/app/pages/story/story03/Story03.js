import { default as React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer, Bird } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story03.scss';

export const Story03 = () => {
	const history = useHistory();

	const currentAudio = useAudio(Assets.mp3_story3);

	const [ score, setScore ] = useState(0);

	if ( score === 10 ) {
		history.push('/story/4');
	}

	const game = () => {
		const style = {
			transform: 'translateY(' + Math.random()*90 + 'vh) translateX(' + Math.random()*80 + 'vw) rotate(' + Math.random()*360 + 'deg)',
		}

		return (
			<img 
				alt="eikel"
				className="story03__game-element" src={Assets.Acorn} 
				onClick={ () => setScore(score + 1) }
				style= { style }
			></img>
		)
	}

	return (
		<div className="story03">
			<Header/>
			<img alt="Zon" className="story03__sun" src={Assets.Sun}></img>
			<Bird/>
			<img alt="Grote Boom" className="story03__tree" src={Assets.TreeGame}></img>
			<img alt="Snuitertje" className="story03__snuitertje" src={Assets.SnuitertjeStand}></img>

			<h2 className="story03__text">Snuitertje speelt graag spelletjes met Grote Boom.
											Helpen jullie mee om 10 eikels van Grote Boom te vangen?
											Zoek de eikels en tik er op.</h2>
			<h1 className="story03__score">{score}</h1>
			<div className="story03__game">
				{ game() }
			</div>

			<Footer currentAudio={currentAudio} />

		</div>
	)
}
