import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story18 = () => {
	const history = useHistory();

	return (
		<div className="story18">
			<Header/>
			<img alt="Zieke Grote Boom" className="story18__tree" src={Assets.SickTree2}></img>
			<img alt="Snuitertje" className="story18__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img alt="Vergrootglas met licht" className="story18__magnifyingGlass" src={Assets.MagnifyingGlassLight}></img>
			<img alt="Dokter" className="story18__doctor" src={Assets.DoctorTree}></img>
			
			<p className="story18__text">
			De stralen schijnen op Grote Boom zijn schors.
			Het duurt maar heel even. Dan is de dokter weer weg. 
			De volgende dag doet de dokter precies hetzelfde. 
			En de dag daarna opnieuw. En opnieuw…
			De zonnestralen maken de schors van Grote Boom helemaal zwart.
			‘Dat is normaal!’ zegt de dokter. 
			</p>

			<Footer audio={Assets.mp3_story18} />
			
		</div>
	)
}

export default Story18;
