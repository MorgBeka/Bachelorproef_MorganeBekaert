import { default as React} from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';

import './header.scss';

const Header = () => {
	const history = useHistory();

	return (
		<div className="header">
			<img alt="Terug naar menu" className="header__buttonHome" src={Assets.ButtonHome} onClick={ () => history.push('/') }></img>
		</div>
	)
}

export default Header;
