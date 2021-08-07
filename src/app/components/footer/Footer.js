import { default as React, useState, useEffect, useRef, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as Images from '../../assets';

import './footer.scss';

const Footer = (props) => {
	const history = useHistory();

	const isPlaying = props.currentAudio != null ? props.currentAudio.isPlaying : false

	const params = useParams();
		
	const playAudio = () => {
		if (props.currentAudio != null) {
			props.currentAudio.play()
		}
	}
	const pauseAudio = () => {
		if (props.currentAudio != null) {
			props.currentAudio.pause()
		}
	}

	// progression
	const AMOUNTOFSTORIES = 21;
	// TODO: story
	const storyId = parseInt(params.id);
	const width = ( storyId / AMOUNTOFSTORIES ) * 100;

	const style = {
		height: '14px',
		width: width + '%'
	}

	const navigateToPreviousStory = () => {
		// updateStory(story - 1);
		pauseAudio();
		if(storyId !== 1){
			history.push(`/story/${storyId - 1}`);
		}else{
			history.push('/');
		}
	}

	const navigateToNextStory = () => {
		// updateStory(story + 1);
		pauseAudio();
		if(storyId < 21){
			history.push(`/story/${storyId + 1}`);
		}else{
			history.push('/');
		}
	}

	return (
		<div className="footer">

			<div className="footer__audioplayer">
				{/* When the toggle is TRUE, show the play button */}
				{!isPlaying && <img alt="play" className="footer__audioplayer-play" src={Images.ButtonPlay} onClick={() => playAudio()}></img>}
				{/* When the toggle is FALSE, show the pause button */}
				{isPlaying && <img alt="pause" className="footer__audioplayer-pause" src={Images.ButtonPause} onClick={() => pauseAudio()}></img>}
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
