import React, { useState, useEffect } from 'react';

const MusicPlayer = () => {
  const [audioSource, setAudioSource] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Fetch the audio file path from the Spring Boot API
    fetch('YOUR_API_ENDPOINT') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setAudioSource(data.path))
      .catch(error => console.log(error));
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      {audioSource && (
        <audio src={audioSource} controls={true} autoPlay={isPlaying} />
      )}
    </div>
  );
};

export default MusicPlayer;
