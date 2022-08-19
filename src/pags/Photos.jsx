import Image from "../comps/Image";
import { useContext } from "react";
import { Context } from "../Context";
import { getClass } from "../utils";

function Photos() {
  const { photoAlbum } = useContext(Context);
  const imgsDisplay = photoAlbum.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));
  return <main className="photos">{imgsDisplay}</main>;
}

export default Photos;
