// ! MY BROTHER IN CHRISTIANO RONALDO PLEASE DO NOT PUT ALL OF YOUR CODE IN APP.JSX INSTEAD OF COMPONENTS!
// ! COMPONENTS ARE THERE FOR SOME LOVING!

import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import GalleryList from "./components/GalleryList";
import CentralStage from "./components/CentralStage";

// - images container
// - single image
// - larger image
// - ui buttons (left and right)

// Start with a wireframe: build your react app UI first, then start coding

function App() {
  const [imageData, setImageData] = useState([]);
  const [focusData, setFocusData] = useState([]);

  useEffect(() => {
    async function fetchUnspImages() {
      const unspshImgsResponse = await fetch(
        "https://api.unsplash.com/photos/?client_id=6M6VjoLzlszphQ-pCxDD7Zx887-YhLGpo9qZCn3aus0&per_page=16"
      );
      const unspshImgData = await unspshImgsResponse.json();
      console.log(unspshImgData);
      // console.log(unspshFocusData);
      setImageData(unspshImgData);
      setFocusData(unspshImgData);
    }
    fetchUnspImages();
  }, []);
  // state
  // - variable to store API image data
  // - variable to store current image

  // effects
  // - fetch data from the API
  // - once it's fetched, put it in state

  // functions(event handlers)
  // - when a user clicks an image
  // - when a user presses a button that should switch image (left and right)

  return (
    <>
      <div className="headerclass">
        <h1>Unsplashes Forward Operating Base</h1>
        <h3>(not actually affiliated with Unsplash, pls no sue)</h3>
      </div>
      <div className="centralstage">
        <CentralStage placeHolderImg={focusData} />
      </div>
      <h2>Focused image</h2>
      <div>
        <GalleryList thumbnailCards={imageData} />
      </div>
    </>
  );
}

// ! TAKE A LOOK AT CONDITIONAL CHAINING OF OBJECTS
export default App;
