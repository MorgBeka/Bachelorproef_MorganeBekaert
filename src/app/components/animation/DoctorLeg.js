import { default as React} from 'react';
import * as Images from '../../assets';

import './leg.scss';

const DoctorLeg = () => {

	return (
		<div className="doctor">
			<img alt="Dokter" className="doctor__withoutLeg" src={Images.DoctorWithoutLeg}></img>
			<img alt="Dokter" className="doctor__leg" src={Images.LegDoctor}></img>
		</div>
	)
}

export default DoctorLeg;
