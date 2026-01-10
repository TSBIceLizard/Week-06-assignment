// import { useState, useEffect } from "react";
import FocusedImg from "./FocusedImg";
import "./CentralStage.css";

// ! Preface Notes: There are two vars that look very similar but are not the same. focusedImages is different to focusedImage. Also <FocusedImg /> is a separate component!

export default function CentralStage({ placeHolderImg }) {
  return (
    <>
      <figure className="central_stage_fig">
        {placeHolderImg.length > 0 &&
          placeHolderImg.map((singlePlaceHolderImg) => {
            return (
              <FocusedImg
                key={singlePlaceHolderImg.id}
                srcfull={singlePlaceHolderImg.urls.regular}
                dec={singlePlaceHolderImg.alt_description}
                date={singlePlaceHolderImg.created_at}
              />
            );
          })}
      </figure>
    </>
  );
}

//        <FocusedImg
//          srcfull={placeHolderImg}
//          desc={placeHolderDesc}
//          date={placeHolderDate}
//         />

//        /*{ {focusedImages.length > 0 &&
//           focusedImages.map((focusedImage) => { }*/
//        return (
//        );
//   })}
