import { useState, useEffect } from "react";
import {getGifs} from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
  const [images, setImages] = useState([]);
  const [isLoanding, setLoanding] = useState(true)

  const getImages = async() =>{
    const newImages = await getGifs(category);
    setImages(newImages);
    setLoanding(false);
  }

  useEffect(() => {
    //este es una forma de como hacerlo
  //  getGifs(category)
  //  .then (newImages => setImages(newImages))
    getImages();
  }, []);

  return {
    images,
    isLoanding 
  }
}
