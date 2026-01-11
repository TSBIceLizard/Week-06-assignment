// import { useEffect } from "react";
import GalleryItem from "./GalleryItem";
import "./GalleryList.css";

// ! Preface Notes: There are two vars that look very similar but are not the same. thumbnailCards is different to thumbnailCard ! The latter is singular!

export default function GalleryList({ thumbnailCards }) {
  // useEffect(() => {
  //   function galleryClick({specificGallItem}) {

  //   }
  // });
  return (
    <>
      <figure className="gall_list">
        {thumbnailCards.length > 0 &&
          thumbnailCards.map((thumbnailCard) => {
            return (
              <GalleryItem
                key={thumbnailCard.id}
                galleryId={thumbnailCard.id}
                src={thumbnailCard.urls.thumb}
                desc={thumbnailCard.alt_description}
                date={thumbnailCard.created_at}
              />
            );
          })}
      </figure>
    </>
  );
}
