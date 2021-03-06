import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer, SnuitertjeLeg  } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story01.scss';

export const Story01 = () => {
	const history = useHistory();
	const currentAudio = useAudio(Assets.mp3_story1);

	return (
		<div className="story01">
			<Header/>
			<h1>Waar wil je graag starten met lezen?</h1>
			<img alt="Grote Boom" className="story01__tree" src={Assets.TreeStartWithousSnuiter}></img>
			<SnuitertjeLeg />
			
			<div className="story01__wrapper">
				<h2 onClick={ () => history.push('/story/2') }>Volledige verhaal</h2>
				<h2 onClick={ () => history.push('/story/3') }>1.Het slechte nieuws </h2>
				<h2 onClick={ () => history.push('/story/6') }>2. De operatie</h2>
				<h2 onClick={ () => history.push('/story/9') }>3. Snuitertjes beste vriend</h2>
				<h2 onClick={ () => history.push('/story/12') }>4. Zieke Grote Boom</h2>
				<h2 onClick={ () => history.push('/story/16') }>5. Nieuwe medicijnen</h2>
				<h2 onClick={ () => history.push('/story/19') }>6. Het laatste steentje</h2>
			</div>

			<Footer currentAudio={currentAudio} />
		</div>
	)
}


