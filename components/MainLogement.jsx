//-----MainLogement----//
import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom'
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';

//----Import FontAwesomeIcon from React---//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-regular-svg-icons'
import { faChevronUp, faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function MainLogement(props) {

    /***----useParams--***/
    const params = useParams();
     
    /*****---Si props.item.id est égale à params.id de logement 
    cliqué ? Renvoie-moi et affiche ces proprietés---****/
    const propsItemId = props.item.id;
    if(propsItemId === params.id){

        /*****---- Pour pouvoir maper les images de (props.item.pictures)----******/
        let slidePictures = props.item.pictures;
        const [current, setCurrent] = useState(0)
        const length = slidePictures.length //---Langueur de l'Array des images

        //----Function nextSlide permet de changer l'image vers la droit---//
        const nextSlide = () => {
             
            setCurrent(current === length - 1 ? 0 : current + 1)
        }

        //----Function prevuSlide permet de changer l'image vers la gauche---//
        const prevuSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1)
        }
        
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
                <span key={item} className='DescriptionParagraphe'>{item}</span>
            )
        })

        const rating = props.item.rating
        /****Styles for stars****/
        const styleStars = {
            size:"2xl",
            backgroundColor: "FF6060", 
            color: "FF6060",
            clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
        }
        const noStyleStars = {
            size:"lg",
            color:"#A9A9A9"
        }
        
        //---useState pour controller l'affichage des paragraphes, les chevron---//
        const [showParagraphe, setShowParagraphe] = useState(false)
        const [showEquipements, setShowEquipements] = useState(false)
        
        return (
                <>
                    <div id="slider">
                        <FontAwesomeIcon icon={faChevronLeft} className='left-arrow' onClick={prevuSlide} />
                        <FontAwesomeIcon icon={faChevronRight} className='right-arrow' onClick={nextSlide} />
                        {slidePictures.map((item, index) => {

                            return (
                                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                    {index === current && <img className='loge--image' src={item} alt="les images de logement" />}
                                </div>
                            )
                        })}
                    </div>
                    <div className='informations'>
                        <div className='infos'>
                            <div className='titre'>
                                <h2>{props.item.title}</h2>
                                <p>{props.item.location}</p>
                                <div className='tags'>
                                    {tag}
                                </div>
                            </div>
                            <div className='host'>
                                <div className='host--stars'>
                                    {rating >= 1 ? <span><FontAwesomeIcon icon={faStar} size="lg" style={styleStars}/></span> : <span><FontAwesomeIcon icon={faStar} style={noStyleStars} /></span>}
                                    {rating >= 2 ? <span><FontAwesomeIcon icon={faStar} size="lg" style={styleStars}/></span> : <span><FontAwesomeIcon icon={faStar} style={noStyleStars} /></span>}
                                    {rating >= 3 ? <span><FontAwesomeIcon icon={faStar} size="lg" style={styleStars}/></span> : <span><FontAwesomeIcon icon={faStar} style={noStyleStars} /></span>}
                                    {rating >= 4 ? <span><FontAwesomeIcon icon={faStar} size="lg" style={styleStars}/></span> : <span><FontAwesomeIcon icon={faStar} style={noStyleStars} /></span>}
                                    {rating == 5 ? <span><FontAwesomeIcon icon={faStar} size="lg" style={styleStars}/></span> : <span><FontAwesomeIcon icon={faStar} style={noStyleStars}/></span>}
                                </div>
                                <div className='host--name'>
                                    <h6>{props.item.host.name}</h6>
                                    <img src={props.item.host.picture} alt="Hot-Picture" />
                                </div>
                            </div>
                        </div>
                        <div className='description--equipments'>
                            <div className='desc'>
                                <div className="description" onClick={() => setShowParagraphe(!showParagraphe)}>
                                    <div onClick={() => setShowParagraphe(!showParagraphe)}>
                                        <div className='chevron'>
                                            <p>Description</p> {showParagraphe && <FontAwesomeIcon icon={faChevronDown} />}
                                            {!showParagraphe && <FontAwesomeIcon icon={faChevronUp} />}
                                        </div>
                                        {showParagraphe && <p className='DescriptionParagraphe'>{props.item.description}</p>}
                                    </div>   
                                </div>
                            </div>
                            
                            <div className='equi'>
                                <div className='equipments' onClick={() => setShowEquipements(!showEquipements)} >
                                    <div onClick={() => setShowEquipements(!showEquipements)}>
                                        <div className="chevronEquipement">
                                            <p>Equipements</p> {showEquipements && <FontAwesomeIcon icon={faChevronDown} />}
                                            {!showEquipements && <FontAwesomeIcon icon={faChevronUp} />}
                                        </div>
                                        {showEquipements && <div className='equipe'>{equipment}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
    } 
}