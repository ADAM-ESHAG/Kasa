//-----MainLogement----//
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';

//----Import Carousel From React-----//
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';

//---Import React-Chevron---//
import Chevron from 'react-chevron'

//----Import FontAwesomeIcon from React---//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'


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
        
        /*** Maper tags****/
        const tags = props.item.tags;

        const tag = tags.map(item => {
            return (
                <span key={item} className='tag'>{item}</span>
            )
        })

        /**** Maper éqipments ****/
        const equipments= props.item.equipments
        const equipment = equipments.map(item => {
            return (
                <li key={item}>{item}</li>
            )
        })

        /***-----Function showDescription------***/
        // function ShowDescription() {
        //     const [showParagraphe, setShowParagraphe] = React.useState(true);
        //     const onClick = () => setShowParagraphe(false);
        //     const Show = <div>
        //         <div className='chevron'>
        //             <p>Description</p> <Chevron direction={'down'} />
        //         </div>
        //         <p>{props.item.description}</p>
        //     </div>;
        //     return (
        //         <div>
        //             {showParagraphe ? <Show /> : null}
        //         </div>
        //     );
        // }
        
        return (
                <>
                    <Carousel>
                       {image}
                    </Carousel>
                    <div className='informations'>
                        <div className='titre'>
                            <h2>{props.item.title}</h2>
                            <p>{props.item.location}</p>
                            <div className='tags'>
                                {tag}
                            </div>
                        </div>
                        <div className='host'>
                            <div className='host--stars'>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                                <span><FontAwesomeIcon icon={faStar} /></span>
                            </div>
                            <div className='host--name'>
                                <h6>{props.item.host.name}</h6>
                                <img src={props.item.host.picture} alt="Hot-Picture" />
                            </div>
                        </div>
                        <div className='description--equipments'>
                            <div className="description">
                                {/* <ShowDescription /> */}
                            </div>
                            
                            <div className='equipments'>
                                Equipements <Chevron direction={'up'}/>
                                <ul>{equipment}</ul>
                            </div>
                        </div>

                    </div>
                </>
            )
    }    
}