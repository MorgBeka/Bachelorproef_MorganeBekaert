import { default as React} from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';

import './button.scss';

const Button = ({text, path}) => {
	const history = useHistory();

	return (
		<div className="button" onClick={ () => history.push(path) }>
			<h1 className="button__text">{text}</h1>
			<img alt="Knop" className="button__img" src={Assets.Button} ></img>
		</div>
	)
}

export default Button;
