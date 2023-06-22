import React, { useState, useEffect, useRef } from 'react';
import Test from '../Test';


function Camera({changeEmotion}) {
  const [stream, setStream] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [output , setOutput ] = useState('init');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const getMediaStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { aspectRatio: 1 }, audio: true });
      setStream(stream);
    } catch (error) {
      console.log('error accessing media devices', error);
    }
  };

  useEffect(() => {
    getMediaStream();
  }, []);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (stream && videoRef.current && canvasRef.current) {
        const context = canvasRef.current.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageData = canvasRef.current.toDataURL('image/jpg');
        setImageData(imageData);
        canvasRef.current.toBlob((blob) => {
          const formData = new FormData();
          formData.append('image', blob, 'image.jpg');
          fetch('http://localhost:5000/', { method: 'POST', headers: {
              'Content-Type': 'application/json'
            }, body: JSON.stringify({ image_data: imageData}) })
            .then((response) => response.json())
            .then((data) =>{
              setOutput(data.output);
         } )
            .catch((error) => console.log(error));
        }, 'image/jpeg', 0.8);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [stream]);

  useEffect(()=>{
    if(output==="")
    {
      changeEmotion("Happy")
    }
    else{
      changeEmotion(output)
    } 
  },[output])

  return (
    <div>
      <div className='video'>
        <video ref={videoRef} autoPlay muted className='video-tag' />
        <canvas ref={canvasRef} width='320' height='240' style={{ display: 'none' }} />
        <h2 style={{ marginTop:'240px' }}>Output: {output}</h2>
      </div>
      {<Test/>}
    </div>
  );
}

export default Camera;
