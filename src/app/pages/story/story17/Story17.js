import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story17.scss';

export const Story17 = () => {
	const history = useHistory();

	const currentAudio = useAudio(Assets.mp3_story17);

	return (
		<div className="story17">
			<Header/>
			<img alt="Zieke Grote Boom" className="story17__tree" src={Assets.SickTree2}></img>
			<img alt="Snuitertje" className="story17__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img alt="Vergrootglas" className="story17__magnifyingGlass" src={Assets.MagnifyingGlass} onClick={ () => history.push('/story/18') }></img>
			<img alt="Dokter" className="story17__doctor-leg" src={Assets.LegDoctor2}></img>
			<img alt="Dokter" className="story17__doctor-withoutLeg" src={Assets.DoctorWithoutLeg}></img>
			<p className="story17__text">
			Nu is het tijd voor een nieuwe behandeling.
			De dokter tekent lijnen op de schors. 
			Dan zet hij een soort vergrootglas op Grote Boom.
			‘Misschien zitten er nog eitjes van de houtwormpjes onder de schors.
			Die kan ik dan wegstralen met deze lens.’

			Snuiter kijkt nieuwsgierig naar het vergrootglas. 
			<strong> Klik op het vergrootglas</strong> om te zien wat er gebeurt.
			</p>
			
			<Footer currentAudio={currentAudio} />

		</div>
	)
}
