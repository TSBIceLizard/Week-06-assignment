// import { useEffect } from "react";
import "./GalleryItem.css";

export default function GalleryItem({ galleryId, src, desc, date }) {
  // useEffect(() => {galleryClick({galleryId}) {

  // }});
  return (
    <>
      <figure className="gall_fig">
        <div>
          <img className="gall_img" src={src} />
        </div>
        <p>Description: {desc}</p>
        <p>Created: {date}</p>
      </figure>
    </>
  );
}
