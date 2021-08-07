import { default as React, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer  } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story02.scss';

export const Story02 = () => {
	const history = useHistory();
	const currentAudio = useAudio(Assets.mp3_story2);

	return (
		<div className="story02">
			<Header/>
			<h1>Snuiter speelt vaak in het bos, zijn beste vriend daar is Grote Boom.</h1>
			<img alt="Zon" className="story02__sun" src={Assets.Sun} ></img>
			<img alt="Vogel" className="story02__bird" src={Assets.Bird}></img>
			<img alt="Grote Boom" className="story02__tree" src={Assets.TreeStart}></img>
			<div className="story02__wrapper" onClick={ () => history.push('/story/3') }>
				<h2>Gaan jullie mee met Snuiter in het bos?</h2>
				<img alt="Ga verder" className="story02__wrapper-arrow" src={Assets.ArrowNext2}></img>
			</div>
			
			<Footer currentAudio={currentAudio} />
		</div>
	)
}


