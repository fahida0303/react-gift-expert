import { useFetchGifs } from '../hooks/useFetchGifs.js';
import { GifItemL } from './GifItemL.jsx';



export const GifGrid = ({ category }) => {


  const {images, isLoading} = useFetchGifs( category );

  //console.log({isLoading})


  return (
    <>

    <h3>{ category}</h3>
    {
      isLoading && ( <h2> Cargando... </h2> )
    }
    <div className='card-grid' >
      {
      images.map( ( image ) => (
        <GifItemL 
          key={ image.id }
          // title= {image.title}
          // url= {image.url} 
          { ...image }
          
        />
      ))
      }
    </div>
    </>
  )
}
