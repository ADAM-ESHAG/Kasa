//-----MainContent----//
import { Link, useParams } from 'react-router-dom'


export default function MainContent(props) {
    return (
            <Link key={props.item.id} to={`./Logement?id=${props.item.id}`}>
                <div className="logement">
                    <img src={props.item.cover} alt="logement-image" className="logement--img"/>
                    <p className="title"><strong>{props.item.title}</strong></p>
                </div>
            </Link>
        
    )
}