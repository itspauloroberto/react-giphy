import React, { useEffect } from 'react';
import GifList from '../GifList';
import { search } from '../helpers/api';
import LightBox from '../LightBox';

const Main = () => {
  const [gifsFound, setGifsFound] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [searchString, setSearchString] = React.useState('');
  const [shouldShowLightBox, setShouldShowLightBox] = React.useState(false);
  const [startingIndex, setStartingIndex] = React.useState(0);

  useEffect(() => {
    setIsFetching(true);
    setShouldShowLightBox(false);
    async function main() {
      const response = await (await search(searchString)).json();
      setGifsFound(response.data);
      setIsFetching(false);
    }
    main();
  }, [searchString]);

  useEffect(() => {
    console.log(gifsFound);
  }, [gifsFound])

  return (
    <div>
      <input type='text' value={searchString} onChange={(event) => setSearchString(event.target.value)} />
      {
        !isFetching && (
          shouldShowLightBox ?
            (
              <LightBox gifsList={gifsFound} startingIndex={startingIndex} />
            ) : (
              <GifList gifs={gifsFound} setShouldShowLightBoxHandler={setShouldShowLightBox} setStartingIndexHandler={setStartingIndex} />
            )
        )
      }
    </div>
  );
}

export default Main;
