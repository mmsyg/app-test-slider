import React, { useRef, useState, useEffect } from 'react';
 // Make sure to convert and import your CSS

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Default volume
  const [playbackRate, setPlaybackRate] = useState(1); // Default playback rate

  useEffect(() => {
    const video = videoRef.current;

    const updateCurrentTime = () => {
      setCurrentTime(video.currentTime);
      const progressBar = document.querySelector('.progress-bar');
      const percent = (video.currentTime / video.duration) * 100;
      progressBar.style.width = `${percent}%`;
    };

    const updateDuration = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateCurrentTime);
    video.addEventListener('loadedmetadata', updateDuration);

    // Clean up
    return () => {
      video.removeEventListener('timeupdate', updateCurrentTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const formatTime = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) seconds = `0${seconds}`;
    if (hours > 0) {
      if (minutes < 10) minutes = `0${minutes}`;
      return `${hours}:${minutes}:${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleRateChange = (rate) => {
    videoRef.current.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const handleSeek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.parentElement.requestFullscreen().catch((err) => console.log(err));
    } else {
      document.exitFullscreen();
    }
  };

  const handlePip = async () => {
    try {
      if (videoRef.current !== document.pictureInPictureElement) {
        await videoRef.current.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div  onClick={handlePlayPause} className="container show-controls">
      <div className="wrapper">
        <div className="video-timeline" onClick={handleSeek}>
          <div className="progress-area">
            <span>{formatTime(currentTime)}</span>
            <div className="progress-bar"></div>
          </div>
        </div>
        <ul className="video-controls">
          <li className="options left">
           
            {/* <div className="video-timer">
              <p className="current-time">{formatTime(currentTime)}</p>
              <p className="separator"> / </p>
              <p className="video-duration">{formatTime(duration)}</p>
            </div> */}
          </li>
          <li className="options center">
            
           
            
          </li>
          <li className="options right">
            <div className="playback-content">
          
            </div>
          
          </li>
        </ul>
      </div>
      <video ref={videoRef} src={src}  width="1920px" height="1080px"/>
    </div>
  );
};

export default VideoPlayer;
