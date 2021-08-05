import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';

import './story19.scss';

export const Story19 = () => {
	const history = useHistory();

	return (
		<div className="story19">
			<Header/>
			<img alt="Zieke Grote Boom" className="story19__tree" src={Assets.SickTree3}></img>
			<img alt="Snuitertje" className="story19__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img alt=" Lege bokaal" className="story09__jar" src={Assets.JarProgress}></img>

			
			<p className="story19__text">
			En dan gooit Snuiter het laatste steentje in de rivier. De pot is leeg.
			Maar Grote Boom ziet er nog steeds slap uit. Snuiter snapt het niet.
			<br></br><br></br>
			De dokter zegt: ‘De houtwormpjes zijn nu allemaal weg 
			en ook de eitjes zijn door de zon helemaal weggestraald.
			Nu kan Grote Boom stilletjesaan beter worden.’
			</p>
			
			<Footer audio={Assets.mp3_story19} />

		</div>
	)
}
