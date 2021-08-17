import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import { useAudio } from "../../../utilities/audio";

import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';

import './story14.scss';

export const Story14 = () => {
	const history = useHistory();

	const crownRef = useRef();
	const dropzoneRef = useRef();

	const onDrop = (e) => {
		// console.log('Released the drop component');
		if (crownRef.current == null || dropzoneRef.current == null ){
			return;
		}
		
		const crownRefBox = crownRef.current.getBoundingClientRect()
		const dropzoneRefBox = dropzoneRef.current.getBoundingClientRect()
		
		// Check if the two boxes overlap
		if(!(
			crownRefBox.right < dropzoneRefBox.left ||
			crownRefBox.left > dropzoneRefBox.right ||
			crownRefBox.bottom < dropzoneRefBox.top ||
			crownRefBox.top > dropzoneRefBox.bottom
		)) {
			history.push('/story/15');
		}
	};

	
	const currentAudio = useAudio(Assets.mp3_story14);

	return (
		<div className="story14">
			<Header/>
			<img alt="Zieke Grote Boom" className="story14__tree" src={Assets.SickTree}></img>
			<img alt="Snuitertje" className="story14__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img alt="Schaap Bessie met sjaal" className="story14__sheep" src={Assets.SheepSharp}></img>

			
			<p className="story14__text">
			Snuiter wil ook iets moois maken van de afgevallen blaadjes.
			Snuitertje heeft een kroon gemaakt van de afgevallen blaadjes.
			Zoeken jullie de kroon?
			<br></br><br></br>
			<strong>Geef de kroon aan Snuitertje.</strong>
			</p>

			<Draggable onStop={() => onDrop(crownRef.current)} >
				<img alt="Kroon" className="story14__crown" src={Assets.Crown} ref={crownRef}></img>
			</Draggable>


			<div id="dropzone14" ref={dropzoneRef}></div>

			<Footer currentAudio={currentAudio} />

		</div>
	)
}

