import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';

import './story20.scss';

export const Story20 = () => {
	const history = useHistory();
	const acornRef = useRef();

	const onDrop = (e) => {
		// console.log('Released the drop component');
		if (e.classList.contains("hovered")) {
			history.push('/story/21');
		}
	};

	const onDropAreaMouseHover = (e) => {
		// console.log('Released the drop component inside the dropzone');
		e.classList.add('hovered');
	}



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

			<div id="dropzone20" onMouseOver={() => onDropAreaMouseHover(acornRef.current)}></div>

			<Footer audio={Assets.mp3_story20} />

		</div>
	)
}
