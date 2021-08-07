import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story08.scss';

export const Story08 = () => {
	const history = useHistory();
	const currentAudio = useAudio(Assets.mp3_story8);

	const snuitertjeRef = useRef();

	const onDrop = (e) => {
		if (e.classList.contains("hovered")) {
			history.push('/story/9');
		}
	};

	const onDropAreaMouseHover = (e) => {
		e.classList.add('hovered');
	}


	return (
		<div className="story08">
			<Header/>
			<img alt="Zon" className="story08__sun" src={Assets.Sun}></img>
			<img alt="Grote Boom" className="story08__tree" src={Assets.TreeWithoutSickBranch}></img>
			<img alt="Medicijn" className="story08__medicin" src={Assets.Medicin}></img>
			<img alt="Pleister" className="story08__plaster" src={Assets.Plaster}></img>
			<img alt="Dokter" className="story08__doctor" src={Assets.DoctorTree}></img>
			<img alt="Zieke tak" className="story08__sickBranch" src={Assets.SickBranch2}></img>
			<img alt="Dokterstas" className="story08__kit" src={Assets.KitWithoutSaw}></img>
			<img alt="Zaag" className="story08__saw" src={Assets.Saw}></img>
			
			<p className="story08__text">
			De dokter heeft nog een speciaal medicijn bij zich. 
			’Dat is nodig om de laatste houtwormpjes weg te jagen.’
			Maar het gaat Grote Boom wel ziek maken. 
			Pas daarna kan Grote Boom weer beter worden.
			<br></br><br></br>
			‘Wacht eens even,’ zegt Snuiter, ‘ik heb een beter idee!
			Ik geef Grote Boom elke dag een kusje. Daarvan gaan de
			wormpjes vast ook weg.’ ‘Kusjes en knuffels geven
			is zeker een goed idee,’ zegt de dokter, ‘maar
			alleen medicijnen kunnen houtwormpjes wegjagen.’
			<br></br><br></br>
			Laat Snuiter de boom een dikke knuffel geven! 
			Dit kan door <strong>Snuitertje naar de boom te slepen.</strong>
			</p>

			<Draggable onStop={() => onDrop(snuitertjeRef.current)} >
				<img alt="Snuitertje" className="story08__snuitertje" src={Assets.SnuitertjeHug} ref={snuitertjeRef}></img>
			</Draggable>

			<div id="dropzone8" onMouseOver={() => onDropAreaMouseHover(snuitertjeRef.current)}></div>

			<Footer currentAudio={currentAudio} />
			
		</div>
	)
}
