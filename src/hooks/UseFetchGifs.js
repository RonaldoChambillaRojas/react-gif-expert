import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";



export const useFetchGifs = (category) => {

        const [images, setImages] = useState([])
        const [isLoading, setIsLoading] = useState(true)
        
        const getImagen = async() => {
            const respuesta = await getGifs(category);
            setImages(respuesta)
            setIsLoading(false)
        }
        
        useEffect( () => {
            getImagen()
    
        }, [] )

    return{
        images,
        isLoading
    }
}
