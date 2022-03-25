import React from "react";
import { Image } from "react-konva";
import useImage from "use-image";

// the first very simple and recommended way:
// const MemeImage = ({ url }) => {
//   const [image] = useImage(url);
//   return <Image image={image} />;
// };

const MemeImage = () => {
  return <div>meme-image</div>;
};

export default MemeImage;
