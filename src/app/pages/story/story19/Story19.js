import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story19.scss';

export const Story19 = () => {
	const history = useHistory();

	const currentAudio = useAudio(Assets.mp3_story19);

	const stoneRef = useRef();
	const dropzoneRef = useRef();

	const onDrop = (e) => {
		// console.log('Released the drop component');
		if (dropzoneRef.current == null || dropzoneRef.current == null ){
			return;
		}

		const stoneRefBox = stoneRef.current.getBoundingClientRect()
		const dropzoneRefBox = dropzoneRef.current.getBoundingClientRect()
		
		// Check if the two boxes overlap
		if(!(
			stoneRefBox.right < dropzoneRefBox.left ||
			stoneRefBox.left > dropzoneRefBox.right ||
			stoneRefBox.bottom < dropzoneRefBox.top ||
			stoneRefBox.top > dropzoneRefBox.bottom
		)) {
			history.push('/story/20');
		}


	};

	return (
		<div className="story19">
			<Header/>
			<img alt="Zieke Grote Boom" className="story19__tree" src={Assets.SickTree3}></img>
			<img alt="Snuitertje" className="story19__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img alt=" Lege bokaal" className="story19__jar" src={Assets.JarEmpty}></img>

			
			<p className="story19__text">
			En dan gooit Snuiter het laatste steentje in de rivier. De pot is leeg.
			Maar Grote Boom ziet er nog steeds slap uit. Snuiter snapt het niet.
			<br></br><br></br>
			De dokter zegt: ‘De houtwormpjes zijn nu allemaal weg 
			en ook de eitjes zijn door de zon helemaal weggestraald.
			Nu kan Grote Boom stilletjesaan beter worden.’
			</p>
			
			<Draggable onStop={() => onDrop(stoneRef.current)} >
				<img alt="Steen" className="story19__stone" src={Assets.Stone2} ref={stoneRef}></img>
			</Draggable>

			<div id="dropzone19" ref={dropzoneRef}></div>

			<Footer currentAudio={currentAudio} />

		</div>
	)
}
