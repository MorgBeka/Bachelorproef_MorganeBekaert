import { default as React} from 'react';
import * as Images from '../../assets';

import './leaves.scss';

const Leaves = () => {

	return (
		<div className="Leaves">
			<img alt="Blaadjes" className="leaves__1" src={Images.Leaves1}></img>
			<img alt="Blaadjes" className="leaves__2" src={Images.Leaves2}></img>
		</div>
	)
}

export default Leaves;
