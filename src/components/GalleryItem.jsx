// import { useState } from "react";
import "./GalleryItem.css";

export default function GalleryItem({ src, desc, author, date }) {
  // const [selectItem, ]
  return (
    <>
      <figure className="gall_fig">
        <div>
          <img className="gall_img" src={src} />
        </div>
        <p>Description: {desc}</p>
        <p>By: {author}</p>
        <p>Created: {date}</p>
      </figure>
    </>
  );
}
