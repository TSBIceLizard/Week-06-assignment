// import { useState } from "react";

export default function FocusedImg({ srcfull, desc, date }) {
  //   const [focusImg, setFocusImg] = useState([]);
  return (
    <>
      <div>
        <img src={srcfull} alt={desc} />
        <p>Description: {desc}</p>
        <p>Date created: {date}</p>
      </div>
    </>
  );
}
