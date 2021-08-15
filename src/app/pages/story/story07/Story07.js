import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../../assets';
import { Header, Footer, Sunshine, DoctorLeg } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story07.scss';

export const Story07 = () => {
	const history = useHistory();
	const currentAudio = useAudio(Assets.mp3_story7);

	const branchRef = useRef();

	const onDrop = (e) => {
		if (e.classList.contains("hovered")) {
			history.push('/story/8');
		}
	};

	const onDropAreaMouseHover = (e) => {
		e.classList.add('hovered');
	}

	return (
		<div className="story07">
			<Header/>
			<Sunshine/>
			<img alt="Vogel" className="story07__bird" src={Assets.Bird}></img>
			<img alt="Grote Boom" className="story07__tree" src={Assets.TreeWithoutSickBranch}></img>
			<img alt="Snuitertje" className="story07__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img alt="Zaag" className="story07__saw" src={Assets.Saw}></img>
			<DoctorLeg/>
			<img alt="Dokterstas" className="story07__kit" src={Assets.KitWithoutSaw}></img>
-			
			<p className="story07__text">Trek nu aan de zieke tak om de dokter te helpen.
				Sleep de tak naar Snuitertje, die nieuwsgierig staat te kijken naar de dokter.
			</p>

			<Draggable onStop={() => onDrop(branchRef.current)} >
				<img alt="Zieke tak" className="story07__sickBranch" src={Assets.SickBranch} ref={branchRef}></img>
			</Draggable>

			<div id="dropzone7" onMouseOver={() => onDropAreaMouseHover(branchRef.current)}></div>
			
			<Footer currentAudio={currentAudio} />

		</div>
	)
}

