import { default as React, useState, useEffect, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {ProgressionStoryContext} from '../../App.js'
import * as Images from '../../assets';

import './footer.scss';

const Footer = ({audio}) => {
	const history = useHistory();


	const {story, updateStory} = useContext(ProgressionStoryContext)
	
	useEffect(() => {
		playAudio()
	},[])

	// AudioPlayer
	const [ isPlaying, setIsPlaying ] = useState(true);
	//instantie vh audioobject
	const audioRef = useRef(new Audio(audio));
		
	const playAudio = () => {
		audioRef.current.play();
		setIsPlaying(false);
	}
	const pauseAudio = () => {
		audioRef.current.pause();
		setIsPlaying(true);
	}

	// progression
	const AMOUNTOFSTORIES = 20;
	const width = ( story / AMOUNTOFSTORIES ) * 100;

	const style = {
		height: '14px',
		width: width + '%'
	}

	const navigateToPreviousStory = () => {
		updateStory(story - 1);
		if(story !== 1){
			audioRef.current.pause();
			history.push('/story/' + ( parseInt(window.location.pathname.split('/')[2]) - 1 ));
		}else{
			audioRef.current.pause();
			history.push('/');
		}
	}

	const navigateToNextStory = () => {
		updateStory(story + 1);
		if(story !== 20){
			audioRef.current.pause();
			history.push('/story/' + ( parseInt(window.location.pathname.split('/')[2]) + 1 ));
		}else{
			audioRef.current.pause();
			history.push('/');
		}
	}

	return (
		<div className="footer">

			<div className="footer__audioplayer">
				{/* When the toggle is TRUE, show the play button */}
				{isPlaying && <img alt="play" className="footer__audioplayer-play" src={Images.ButtonPlay} onClick={() => playAudio()}></img>}
				{/* When the toggle is FALSE, show the pause button */}
				{!isPlaying && <img alt="pause" className="footer__audioplayer-pause" src={Images.ButtonPause} onClick={() => pauseAudio()}></img>}
			</div>

			<div className="footer__progression">
				<div className="footer__progression-bar" style={style}></div>
				<img alt="back" className="footer__progression-back" src={Images.ArrowBack} onClick={() => navigateToPreviousStory()}></img>
				<img alt="next" className="footer__progression-next" src={Images.ArrowNext} onClick={() => navigateToNextStory()}></img>
			</div>

		</div>
	)
}

export default Footer;
