import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../../assets';
import { Header, Footer } from '../../../components';

import './story12.scss';

export const Story12 = () => {
	const history = useHistory();

	return (
		<div className="story12">
			<Header/>
			<img alt="Zieke Grote Boom" className="story12__tree" src={Assets.SickTree}></img>
			<img alt="Snuitertje" className="story12__snuitertje" src={Assets.SnuitertjeStand}></img>
			
			<p className="story12__text">
			De takken van Grote Boom worden steeds slapper. 
			Alle blaadjes vallen op de grond. Snuiter heeft Grote Boom
			nog nooit zo ziek gezien. De kale kruin ziet er raar uit.
			Snuiter wordt er bang van.
			</p>
			<img alt="Ga verder" className="story12__arrow" src={Assets.ArrowNext} onClick={ () => history.push('/story/13') }></img>

			<Footer audio={Assets.mp3_story12} />

		</div>
	)
}

