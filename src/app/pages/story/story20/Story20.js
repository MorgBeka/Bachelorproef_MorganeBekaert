import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story20.scss';

export const Story20 = () => {
	const history = useHistory();
	const currentAudio = useAudio(Assets.mp3_story20);

	const acornRef = useRef();
	const dropzoneRef = useRef();

	
	const onDrop = (e) => {
		// console.log('Released the drop component');
		if (dropzoneRef.current == null || dropzoneRef.current == null ){
			return;
		}

		const acornRefBox = acornRef.current.getBoundingClientRect()
		const dropzoneRefBox = dropzoneRef.current.getBoundingClientRect()
		
		// Check if the two boxes overlap
		if(!(
			acornRefBox.right < dropzoneRefBox.left ||
			acornRefBox.left > dropzoneRefBox.right ||
			acornRefBox.bottom < dropzoneRefBox.top ||
			acornRefBox.top > dropzoneRefBox.bottom
		)) {
			history.push('/story/21');
		}
	};

	return (
		<div className="story20">
			
			<img alt="Grote Boom" className="story20__tree" src={Assets.OtherTree}></img>
			<img alt="Snuitertje" className="story20__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img alt="Bokaal met aarde" className="story20__jar" src={Assets.JarWithSoil}></img>
			<img alt="Eikels" className="story20__acornsRight" src={Assets.Acorns}></img>
			<img alt="Eikels" className="story20__acornsLeft" src={Assets.Acorns}></img>
			<Header/>
			
			<p className="story20__text">
			Snuiter vult zijn lege pot met aarde.
			Hij wil er een nootje van Grote Boom in duwen.
			<br></br><br></br>
			Helpen jullie mee? 
			<br></br>Zoek het nootje van Grote Boom dat je kan slepen en stop het in de bokaal.
			</p>

			<Draggable onStop={() => onDrop(acornRef.current)} >
				<img alt="Eikel" className="story20__acorn" src={Assets.Acorn} ref={acornRef}></img>
			</Draggable>

			<div id="dropzone20" ref={dropzoneRef}></div>

			<Footer currentAudio={currentAudio} />

		</div>
	)
}
