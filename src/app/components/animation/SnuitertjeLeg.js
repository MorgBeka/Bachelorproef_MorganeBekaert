import { default as React} from 'react';
import * as Images from '../../assets';

import './leg.scss';

const SnuitertjeLeg = () => {

	return (
		<div className="snuitertje">
		<img alt="Been Snuitertje" className="snuitertje__leg" src={Images.Leg}></img>
			<img alt="Snuitertje" className="snuitertje__withoutleg" src={Images.SnuitertjeWithoutLeg}></img>
		</div>
	)
}

export default SnuitertjeLeg;
