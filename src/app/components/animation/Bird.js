import { default as React} from 'react';
import * as Images from '../../assets';

import './bird.scss';

const Bird = () => {

	return (
		<img alt="Vogel" className="bird" src={Images.Bird}></img>
	)
}

export default Bird;
