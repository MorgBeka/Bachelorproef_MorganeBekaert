import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';

import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';

import './story14.scss';

export const Story14 = () => {
	const history = useHistory();

	const crownRef = useRef();

	const onDrop = (e) => {
		// console.log('Released the drop component');
		if (e.classList.contains("hovered")) {
			history.push('/story/15');
		}
	};

	const onDropAreaMouseHover = (e) => {
		// console.log('Released the drop component inside the dropzone');
		e.classList.add('hovered');
	}


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


			<div id="dropzone14" onMouseOver={() => onDropAreaMouseHover(crownRef.current)}></div>

			<Footer audio={Assets.mp3_story14} />

		</div>
	)
}

