import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../../assets';
import { Header, Footer, Leaves } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story09.scss';

export const Story09 = () => {
	const history = useHistory();
	const currentAudio = useAudio(Assets.mp3_story9);

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
			history.push('/story/10');
		}


	};


	return (
		<div className="story09">
			<Header/>
			<img alt="Zon" className="story09__sun" src={Assets.Sun}></img>
			{/* <img alt="Grote Boom" className="story09__tree" src={Assets.TreeWithoutSickBranch}></img> */}
			
			<img alt="Grote Boom" className="story09__tree" src={Assets.TreeWithoutLeaves}></img>
			<Leaves/>
			<img alt="Medicijn" className="story09__medicin" src={Assets.Medicin}></img>
			<img alt="Pleister" className="story09__plaster" src={Assets.Plaster}></img>
			<img alt="Zieke tak" className="story08__sickBranch" src={Assets.SickBranch2}></img>


			<img alt="Bokaal" className="story09__jar" src={Assets.JarFull}></img>
			<img alt="Dokter" className="story09__doctor" src={Assets.DoctorStone}></img>
			<img alt="Snuitertje" className="story09__snuitertje" src={Assets.SnuitertjeStand}></img>

			<p className="story09__text">
			De dokter geeft Snuiter een grote pot met steentjes.
			‘Iedere dag mag jij één steentje uit de pot halen.
			Op een dag is de pot leeg. Vanaf die dag kan Grote Boom
			weer beter worden.’ 
			Snuiter kijkt verdrietig naar de pot. 'Er zitten zoveel steentjes in!'
			</p>
			<p className="story09__text2">
			Helpen jullie mee om het eerste steentje eruit te halen?
			{/* eruit of er uit */}
			<strong> Neem het steentje</strong> bovenaan in de pot en geef het aan Snuitertje.
			</p>

			<Draggable onStop={() => onDrop(stoneRef.current)} >
				<img alt="Steen" className="story09__stone" src={Assets.Stone2} ref={stoneRef}></img>
			</Draggable>

			<div id="dropzone9" ref={dropzoneRef}></div>

			<Footer currentAudio={currentAudio} />

		</div>
	)
}

