import { useEffect, useState } from "react";

const _cache = {}

function getAudioForUrl(url) {
  if (_cache[url] != null) {
    return _cache[url];
  }

  _cache[url] = new Audio(url);
  return _cache[url];
}

export function useAudio(url) {
  const audio = getAudioForUrl(url);
	const [ isPlaying, setIsPlaying ] = useState(false);

  const reset = () => audio.currentTime = 0;
  const stop = () => {
    audio.pause()
    reset()
  }

  function audioEndedListener() {
    setIsPlaying(false);
    reset()
  }
  audio.addEventListener("ended", audioEndedListener.bind(this));

	useEffect(() => {
    audio.play();
    setIsPlaying(true);

		return () => {
			stop();
      setIsPlaying(false);
      audio.removeEventListener("ended", audioEndedListener);
		}
	}, [])

  return {
    play: () => {
      audio.play()
      setIsPlaying(true);
    },
    stop: () => {
      stop();
      setIsPlaying(false);
    },
    pause: () => {
      audio.pause()
      setIsPlaying(false)
    },
    isPlaying
  }
}
