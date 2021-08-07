import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story11.scss';

export const Story11 = () => {
	const history = useHistory();
	const currentAudio = useAudio(Assets.mp3_story11);

	return (
		<div className="story11">

			<img alt="Grote Boom" className="story11__tree" src={Assets.OtherTree}></img>
			<img alt="Snuitertje" className="story11__snuitertje" src={Assets.SnuitertjeAngry}></img>
			<img alt="Uil" className="story11__owl" src={Assets.Owl}></img>
			<Header/>
			
			<p className="story11__text">		 
				Snuiter verveelt zich. Hij is boos. 
				‘Waarom moet Grote Boom nu wormpjes krijgen?’ bromt hij. 
				Hij geeft een schop tegen een andere boom. 
				Oehoe de Uil heeft het gezien. 
			</p>

			<p className="story11__text2">
			‘Ik begrijp dat je boos bent. Maar andere bomen pijn doen mag niet hoor!’ zegt Oehoe.  
			<br></br><br></br>
			Oehoe is erg slim. 
			Hij weet veel over bomen en ook over houtwormpjes.
			Dus vraagt Snuiter aan Oehoe: ‘Waarom heeft Grote Boom houtwormpjes?’ 
			‘Dat is een heel moeilijke vraag…’ zucht Oehoe.
			‘Het is niemands schuld! 
			De ene boom heeft houtwormpjes, de andere niet. Zo is het leven!’
			</p>

			<img alt="Ga verder" className="story11__arrow" src={Assets.ArrowNext} onClick={ () => history.push('/story/12') }></img>

			<Footer currentAudio={currentAudio} />

		</div>
	)
}

