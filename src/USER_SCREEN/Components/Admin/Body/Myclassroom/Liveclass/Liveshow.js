import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer';
const socket = io('http://localhost:3000');
const LiveShow = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [peer, setPeer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [subtitles, setSubtitles] = useState('');
  const [volume, setVolume] = useState(0.5);
  useEffect(() => {
    // Get access to the user's webcam and microphone
    async function startLocalVideo() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localVideoRef.current) localVideoRef.current.srcObject = stream;
        createPeer(stream);
      } catch (err) {
        console.error('Error accessing the webcam:', err);
      }
    }
    startLocalVideo();
    // Handle 'offer' event from the server
    socket.on('offer', (offer) => {
      handleOffer(offer);
    });
    // Handle 'answer' event from the server
    socket.on('answer', (answer) => {
      handleAnswer(answer);
    });
    // Handle 'ice-candidate' event from the server
    socket.on('ice-candidate', (candidate) => {
      handleNewICECandidate(candidate);
    });
  }, []);
  // Function to create a peer connection and send an offer to other users
  function createPeer(stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });
    // Set up event handlers for the peer connection
    // When the peer has generated an SDP offer
    peer.on('signal', (offer) => {
      // Send the offer to the server
      socket.emit('offer', offer);
    });
    // When the peer receives a stream from the remote user
    peer.on('stream', (remoteStream) => {
      if (remoteVideoRef.current) remoteVideoRef.current.srcObject = remoteStream;
    });
    setPeer(peer);
  }
  // Function to handle an incoming offer from another user
  function handleOffer(offer) {
    const peer = new Peer({
      trickle: false,
    });
    // Set up event handlers for the peer connection
    // When the peer has generated an SDP answer
    peer.on('signal', (answer) => {
      // Send the answer to the server
      socket.emit('answer', answer);
    });
    // When the peer receives a stream from the remote user
    peer.on('stream', (remoteStream) => {
      if (remoteVideoRef.current) remoteVideoRef.current.srcObject = remoteStream;
    });
    // Set the remote description to the received offer
    peer.signal(offer);
    setPeer(peer);
  }
  // Function to handle an incoming answer from another user
  function handleAnswer(answer) {
    if (peer) {
      // Set the remote description to the received answer
      peer.signal(answer);
    }
  }
  // Function to handle incoming ICE candidates from other users
  function handleNewICECandidate(candidate) {
    if (peer) {
      // Add the received ICE candidate to the peer connection
      peer.signal(candidate);
    }
  }
  const handlePlayPause = () => {
    if (localVideoRef.current && remoteVideoRef.current) {
      const localVideo = localVideoRef.current;
      const remoteVideo = remoteVideoRef.current;
      if (isPlaying) {
        localVideo.pause();
        remoteVideo.pause();
      } else {
        localVideo.play().catch((error) => {
          console.error('Error playing local video:', error);
        });
        remoteVideo.play().catch((error) => {
          console.error('Error playing remote video:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  const handleSubtitleChange = (e) => {
    setSubtitles(e.target.value);
  };
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (localVideoRef.current && remoteVideoRef.current) {
      localVideoRef.current.volume = newVolume;
      remoteVideoRef.current.volume = newVolume;
    }
  };
  return (
    <div>
      <h1>Video Chat Application</h1>
      <div className="video-container">
        <video ref={localVideoRef} autoPlay muted style={{ width: '320px', height: '240px' }} />
        <video ref={remoteVideoRef} autoPlay style={{ width: '320px', height: '240px' }} />
      </div>
      <div>
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <input type="text" value={subtitles} onChange={handleSubtitleChange} placeholder="Subtitles" />
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
      </div>
    </div>
  );
};
export default LiveShow;