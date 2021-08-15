import { default as React} from 'react';
import * as Images from '../../assets';

import './sunshine.scss';

const Sunshine = () => {

	return (
		<div className="sun">
			<img alt="Zonnestralen" className="sun__sunshine" src={Images.Sunshine}></img>
			<img alt="Zon" className="sun__center" src={Images.Sun2}></img>
		</div>
	)
}

export default Sunshine;
