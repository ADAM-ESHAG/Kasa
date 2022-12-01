//-----MainLogement----//
import { Link } from 'react-router-dom'
import { useSearchParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';

export default function MainLogement(props) {

    /***---Recherche l'ID dans le URL de page Logement---***/
    const search_params = new URLSearchParams(window.location.search);
    const logementId = search_params.get("id"); 
    
    /*****---Si props.item.id égale à l'ID de logement 
    cliqué ? Renoie-moi et affiche ces proprieté---****/
    const propsItemId = props.item.id;
    if(propsItemId === logementId){
        const propsItemPictures = props.item.pictures;

        /*****---- Maper les images de (props.item.pictures)----******/
        const image = propsItemPictures.map(item => {
            return (
                <div key={item} className='carousel--image'>
                    <img src={item} alt="pic" />
                </div>
            )
        })
        
        return (
                <>
                    <Carousel>
                       {image}
                    </Carousel>
                </>
            )
    }    
}