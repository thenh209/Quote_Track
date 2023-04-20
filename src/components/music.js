import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faFile } from '@fortawesome/free-solid-svg-icons';
import bg_music from "../assets/bg_music.mp3";
function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const audio = document.getElementById("myAudio");
    if (!selectedFile) {
      audio.src = bg_music;
    } else {
      audio.src = URL.createObjectURL(selectedFile);
      audio.play();
      setIsPlaying(true);
    }

    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      audio.play();
    });
  }, [selectedFile]);

  const handleTogglePlay = () => {
    const audio = document.getElementById("myAudio");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFileSelected = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <audio id="myAudio"></audio>
      <button id="musicbtn" onClick={handleTogglePlay}>
        {isPlaying ? <FontAwesomeIcon icon={faPause} size="3x"/> : <FontAwesomeIcon icon={faPlay} size="3x"/>}
      </button>
      <label htmlFor="file-input">
        <FontAwesomeIcon icon={faFile} size="3x" style={{ marginTop: '100px',marginLeft:'20px'}}/>
      </label>
      <input
        id="file-input"
        type="file"
        accept="audio/*"
        onChange={handleFileSelected}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default Music;
