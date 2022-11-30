//-----MainContent----//
import { Link } from 'react-router-dom'

export default function MainContent(props) {
    return (
        
            <div className="logement" items={props.item}>
                <Link to="./Logement">
                    <img src={props.item.cover} alt="logement-image" className="logement--img"/>
                    <p className="title"><strong>{props.item.title}</strong></p>
                </Link>
            </div>
        
    )
}