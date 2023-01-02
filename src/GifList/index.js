import React from 'react';

const GifList = ({ gifs = [], setShouldShowLightBoxHandler, setStartingIndexHandler }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap'
    }}>
      {
        gifs.map((gif, index) => {
          return <a href='#' onClick={() => {
            setShouldShowLightBoxHandler(true);
            setStartingIndexHandler(index);
          }}>
            <img width={70} height={70} src={gif?.images?.preview_gif?.url} />
          </a>
        })
      }
    </div>
  );
}

export default GifList;
