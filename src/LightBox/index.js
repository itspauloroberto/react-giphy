import React, { useEffect } from 'react';

const LightBox = ({ gifsList, startingIndex = 0 }) => {
  const [current, setCurrent] = React.useState(startingIndex);

  const handleNext = () => {
    setCurrent(current + 1);
  }

  const handlePrevious = () => {
    setCurrent(current - 1);
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 50,
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button style={{
        height: 50,
        background: 'transparent',
        border: 'none'
      }} onClick={handlePrevious}> {'<'} Previous</button>
      </div>
      <img src={gifsList[current]?.images?.original?.url} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button style={{
        height: 50,
        background: 'transparent',
        border: 'none'
      }} onClick={handleNext}> Next {'>'}</button>
      </div>
    </div>
  );
}

export default LightBox;
