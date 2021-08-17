import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story18.scss';

export const Story18 = () => {
	const history = useHistory();
	const currentAudio = useAudio(Assets.mp3_story18);

	const snuiterRef = useRef();
	const dropzoneRef = useRef();

	
	const onDrop = (e) => {
		// console.log('Released the drop component');
		if (dropzoneRef.current == null || dropzoneRef.current == null ){
			return;
		}

		const snuiterRefBox = snuiterRef.current.getBoundingClientRect()
		const dropzoneRefBox = dropzoneRef.current.getBoundingClientRect()
		
		// Check if the two boxes overlap
		if(!(
			snuiterRefBox.right < dropzoneRefBox.left ||
			snuiterRefBox.left > dropzoneRefBox.right ||
			snuiterRefBox.bottom < dropzoneRefBox.top ||
			snuiterRefBox.top > dropzoneRefBox.bottom
		)) {
			history.push('/story/19');
		}
	};

	return (
		<div className="story18">
			<Header/>
			<img alt="Zieke Grote Boom" className="story18__tree" src={Assets.SickTree2}></img>
			<img alt="Vergrootglas met licht" className="story18__magnifyingGlass" src={Assets.MagnifyingGlassLight}></img>
			<img alt="Dokter" className="story18__doctor-leg" src={Assets.LegDoctor2}></img>
			<img alt="Dokter" className="story18__doctor-withoutLeg" src={Assets.DoctorWithoutLeg}></img>

			<p className="story18__text">
			De stralen schijnen op Grote Boom zijn schors.
			Het duurt maar heel even. Dan is de dokter weer weg. 
			De volgende dag doet de dokter precies hetzelfde. 
			En de dag daarna opnieuw. En opnieuw…
			De zonnestralen maken de schors van Grote Boom helemaal zwart.
			‘Dat is normaal!’ zegt de dokter. 
			<br></br><br></br>
			Sleep Snuitertje naar de boom zodat hij beter kan zien wat er allemaal gebeurt.
			</p>

			<Draggable onStop={() => onDrop(snuiterRef.current)} >
				<img alt="Snuitertje" className="story18__snuitertje" src={Assets.SnuitertjeStand} ref={snuiterRef}></img>
			</Draggable>

			<div id="dropzone18" ref={dropzoneRef}></div>

			<Footer currentAudio={currentAudio} />
			
		</div>
	)
}
