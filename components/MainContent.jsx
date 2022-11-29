//-----MainContent----//
export default function MainContent(props) {
    return (
        
            <div className="logement">
                <img src={props.item.cover} alt="logement-image" className="logement--img"/>
                <p className="title"><strong>{props.item.title}</strong></p>
            </div>
        
    )
}