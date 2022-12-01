//-----MainContent----//
import { Link, useParams } from 'react-router-dom'


export default function MainContent(props) {
    return (
        
            <div className="logement">
                <Link key={props.item.id} to={`./Logement?id=${props.item.id}`}>
                    <img src={props.item.cover} alt="logement-image" className="logement--img"/>
                    <p className="title"><strong>{props.item.title}</strong></p>
                </Link>
            </div>
        
    )
}