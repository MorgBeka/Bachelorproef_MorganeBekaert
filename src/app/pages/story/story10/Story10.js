import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer, Bird } from '../../../components';
import { useAudio } from "../../../utilities/audio";

import './story10.scss';

export const Story10 = () => {
	const history = useHistory();
	const currentAudio = useAudio(Assets.mp3_story10);

	return (
		<div className="story10">
			<Header/>
			<img alt="Zon" className="story10__sun" src={Assets.Sun}></img>
			<Bird/>
			<img alt="Grote Boom" className="story10__tree" src={Assets.TreeWithoutSickBranch}></img>
			<img alt="Medicijn" className="story10__medicin" src={Assets.Medicin}></img>
			<img alt="Pleister" className="story10__plaster" src={Assets.Plaster}></img>
			<img alt="Zieke tak" className="story10__sickBranch" src={Assets.SickBranch2}></img>
			<img alt="Snuitertje" className="story10__snuitertje" src={Assets.SnuitertjeAngry2} onClick={ () => history.push('/story/11') }></img>
			
			<p className="story10__text">
			Het medicijn maakt Grote Boom inderdaad heel erg ziek. 
			Er komen veel vrienden op bezoek. 
			Ze willen Grote Boom opvrolijken.
			Ze spelen spelletjes rond Grote Boom 
			en vertellen verhaaltjes. 
			<br></br><br></br>
			Zien jullie waar Snuiter verstopt zit?
			<br></br><br></br>
			Klik op Snuiter om te zien 
			wat hij aan het doen is.
			</p>

			<Footer currentAudio={currentAudio} />

		</div>
	)
}

