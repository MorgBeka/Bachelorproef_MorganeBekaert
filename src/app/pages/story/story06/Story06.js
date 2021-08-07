import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story06.scss';

export const Story06 = () => {
	const history = useHistory();

	const currentAudio = useAudio(Assets.mp3_story6);

	// 1. Make the ref for the image
	const sawRef = useRef();

	const onDrop = (e) => {
		if (e.classList.contains("hovered")) {
			history.push('/story/7');
		}
	};

	const onDropAreaMouseHover = (e) => {
		e.classList.add('hovered');
	}

	return (
		<div className="story06">
			<Header/>
			<img alt="Zon" className="story06__sun" src={Assets.Sun}></img>
			<img alt="Vogel" className="story06__bird" src={Assets.Bird}></img>
			<img alt="Grote Boom" className="story06__tree" src={Assets.TreeSickBranch}></img>
			<img alt="Dokter" className="story06__doctor" src={Assets.DoctorTree}></img>
			<img alt="Snuitertje" className="story06__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img alt="Dokterstas" className="story06__kit" src={Assets.KitWithoutSaw}></img>

			<p className="story06__text">
			De volgende dag komt de dokter terug. 
			Hij heeft een koffertje met operatiespullen bij zich.
			'De tak met de houtwormpjes moet ik wegsnijden,' legt hij
			Snuitertje uit.
			'Als ik dit niet doe, zit Grote Boom binnenkort 
			helemaal vol houtwormpjes die bomen kapot maken.'
			<br></br><br></br>
			Helpen jullie mee met de dokter?
			<strong> Sleep de zaag naar de zieke tak </strong>
			om de dokter te helpen met de operatie.

			</p>

			{/* onDrop happens when the drag component gets released */}
			<Draggable onStop={() => onDrop(sawRef.current)} >
				<img alt="Zaag" className="story06__saw" src={Assets.Saw} ref={sawRef}></img>
			</Draggable>

			<div id="dropzone6" onMouseOver={() => onDropAreaMouseHover(sawRef.current)}></div>

			<Footer currentAudio={currentAudio} />
		</div>
	
	)
}

