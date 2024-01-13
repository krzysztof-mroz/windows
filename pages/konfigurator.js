import React, { useState, useEffect, useRef } from 'react';

const Konfigurator = () => {
  const [inputWidth, setInputWidth] = useState('500');
  const [inputHeight, setInputHeight] = useState('500');
  const canvasRef = useRef(null);

  // Draw rectangles with the current inputWidth and inputHeight
  useEffect(() => {
    drawRectangles();
  }, [inputWidth, inputHeight]); // Depend on both inputWidth and inputHeight

  const drawRectangles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate scaling factor
    let scaleFactor = Math.min(500 / inputWidth, 500 / inputHeight);
    
    // Calculate real dimensions to maintain aspect ratio
    let realWidth = inputWidth * scaleFactor;
    let realHeight = inputHeight * scaleFactor;

    // Draw the first rectangle with black border
    ctx.fillStyle = 'white';
    ctx.fillRect((canvas.width - realWidth) / 2, (canvas.height - realHeight) / 2, realWidth, realHeight);
    ctx.strokeRect((canvas.width - realWidth) / 2, (canvas.height - realHeight) / 2, realWidth, realHeight);

    // Calculate dimensions for the second rectangle, maintaining the aspect ratio
    let innerWidth = (inputWidth - 50) * scaleFactor;
    let innerHeight = (inputHeight - 50) * scaleFactor;

    // Draw the second rectangle with black border
    ctx.fillStyle = 'blue';
    ctx.fillRect((canvas.width - innerWidth) / 2, (canvas.height - innerHeight) / 2, innerWidth, innerHeight);
    ctx.strokeRect((canvas.width - innerWidth) / 2, (canvas.height - innerHeight) / 2, innerWidth, innerHeight);
  };

  const handleWidthChange = (e) => {
    setInputWidth(Math.max(e.target.value, 0)); // Prevent negative values
  };

  const handleHeightChange = (e) => {
    setInputHeight(Math.max(e.target.value, 0)); // Prevent negative values
  };

  return (
    <div className='pa4'>
      <div className='measure center'>
        <input
          type='number'
          value={inputWidth}
          onChange={handleWidthChange}
          className='input-reset ba b--black-20 pa2 mb2 db w-100'
          placeholder='Enter width'
        />
        <input
          type='number'
          value={inputHeight}
          onChange={handleHeightChange}
          className='input-reset ba b--black-20 pa2 mb2 db w-100'
          placeholder='Enter height'
        />
      </div>
      <canvas ref={canvasRef} width='600' height='600' className='ba b--black-20' style={{ padding: '40px' }} />
    </div>
  );
};

export default Konfigurator;
