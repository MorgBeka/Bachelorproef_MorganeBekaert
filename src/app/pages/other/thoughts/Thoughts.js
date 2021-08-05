import { useState } from 'react';
import * as Assets from '../../../assets';
import { Header  } from '../../../components';
import { useThoughts } from "./useThoughts";

import './thoughts.scss';

export const Thoughts = () => {

	const [inputValue, setInputValue] = useState("")
	const {
		thoughts,
		updateThoughts,
		removeThought,
		createThought,
		removeAll
	} = useThoughts()

	return (
		<div className="thoughts">
			<Header/>

			<div className="thoughts__main">
				{
					thoughts.map(thought => {
						return (
							<div key={thought.id} className="thoughts__main-element">
								<h1 className="thoughts__main-element-text">{thought.text} </h1>
								<button onClick={() => removeThought(thought.id)} className="thoughts__main-element-btn">&#x2716;</button>
							</div>
						) 
					})
				}
			</div>

			<div className="thoughts__form">
				<input
					required
					className="thoughts__form-input"
					placeholder="Waar denk je aan?"
					name="thought"
					id="thought"
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				></input>

				<div className="thoughts__form-safe" onClick={() => {
					createThought(inputValue)
					setInputValue("")
				}}>
					<h1 className="thoughts__form-safe-text">Gedachten opslaan</h1>
					<img alt="opslaan" className="thoughts__form-safe-img" src={Assets.Button} ></img>
				</div>
			</div>
			
			<div className="thoughts__delete" onClick={ () => removeAll() }>
				<h1 className="thoughts__delete-text">Verwijder alles</h1>
				<img alt="verwijderAlles" className="thoughts__delete-img" src={Assets.Button} ></img>
			</div>

		</div>
	)
}
