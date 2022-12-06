import { useState } from 'react';
import BackgroundImg from "/images/about_background.webp"
//----Import FontAwesomeIcon from React---//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

export default function MainAbout() {

    const [fiability, setFiability] = useState(false)
    const [respect, setRespect] = useState(false)
    const [service, setService] = useState(false)
    const [security, setSecurity] = useState(false)
    
    return (
        
            <div className='about--container'>
                <div className='about--background'></div>
                <div className='about'>
                    <div className="fiability">
                        <div className="description" onClick={() => setFiability(!fiability)}>
                            <div onClick={() => setFiability(!fiability)}>
                                <div className='chevron'>
                                    <p>Fiabilité</p> {fiability && <FontAwesomeIcon icon={faChevronDown} />}
                                    {!fiability && <FontAwesomeIcon icon={faChevronUp} />}
                                </div>
                                {fiability && 
                                <p className='DescriptionParagraphe'>
                                    Les annonces postées sur Kasa garantissent une fiabilité totale. 
                                    Les photos sont conformes aux logements, et toutes les 
                                    informations sont régulièrement vérifiées  par nos équipes.</p>}
                            </div>   
                        </div>
                    </div>
                    <div className='respect'>
                        <div className="description" onClick={() => setRespect(!respect)}>
                            <div onClick={() => setRespect(!respect)}>
                                <div className='chevron'>
                                    <p>Respect</p> {respect && <FontAwesomeIcon icon={faChevronDown} />}
                                    {!respect && <FontAwesomeIcon icon={faChevronUp} />}
                                </div>
                                {respect && 
                                <p className='DescriptionParagraphe'>
                                    La bienveillance fait partie des valeurs fondatrices de Kasa.
                                    Tout comportement discriminatoire ou de perturbation du voisinage
                                    entraînera une exclusion de notre plateforme.
                                </p>}
                            </div>   
                        </div>
                    </div>
                    <div className='service'>
                        <div className="description" onClick={() => setService(!service)}>
                            <div onClick={() => setService(!service)}>
                                <div className='chevron'>
                                    <p>Service</p> {service && <FontAwesomeIcon icon={faChevronDown} />}
                                    {!service && <FontAwesomeIcon icon={faChevronUp} />}
                                </div>
                                {service && 
                                <p className='DescriptionParagraphe'>
                                    Nos équipes se tiennent à votre disposition pour vous 
                                    fournir une expérience parfaite. N'hésitez pas à nous 
                                    contacter si vous avez la moindre question.
                                </p>}
                            </div>   
                        </div>
                    </div>
                    <div className='security'>
                        <div className="description" onClick={() => setSecurity(!security)}>
                            <div onClick={() => setSecurity(!security)}>
                                <div className='chevron'>
                                    <p>Securité</p> {security && <FontAwesomeIcon icon={faChevronDown} />}
                                    {!security && <FontAwesomeIcon icon={faChevronUp} />}
                                </div>
                                {security && 
                                <p className='DescriptionParagraphe'>
                                    La sécurité est la priorité de Kasa. Aussi bien pour nos 
                                    hôtes que pour les voyageurs, chaque logement correspond 
                                    aux critères de sécurité établis par nos services. 
                                    En laissant une note aussi bien à l'hôte qu'au locataire, 
                                    cela permet à nos équipes de vérifier que les standards 
                                    sont bien respectés. Nous organisons également des ateliers
                                    sur la sécurité domestique pour nos hôtes.
                                </p>}
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
    )
}