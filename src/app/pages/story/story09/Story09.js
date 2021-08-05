import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';

import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';

import './story09.scss';

export const Story09 = () => {
	const history = useHistory();

	const stoneRef = useRef();

	const onDrop = (e) => {
		// console.log('Released the drop component');
		if (e.classList.contains("hovered")) {
			history.push('/story/10');
		}
	};

	const onDropAreaMouseHover = (e) => {
		// console.log('Released the drop component inside the dropzone');
		e.classList.add('hovered');
	}


	return (
		<div className="story09">
			<Header/>
			<img alt="Zon" className="story09__sun" src={Assets.Sun}></img>
			<img alt="Vogel" className="story09__bird" src={Assets.Bird}></img>
			<img alt="Grote Boom" className="story09__tree" src={Assets.TreeWithoutSickBranch}></img>
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

			<div id="dropzone9" onMouseOver={() => onDropAreaMouseHover(stoneRef.current)}></div>

			<Footer audio={Assets.mp3_story9} />

		</div>
	)
}

