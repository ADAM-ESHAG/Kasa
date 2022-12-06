import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Error() {
    return (
        <>
            <Navbar />
            <main className="main--error">
                <div className="error--container">
                    <div className="error">
                        <h1>404</h1>
                        <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    </div>
                    <div className="return">
                        <Link to={'/'} >Retourner sur la page d’accueil</Link>
                    </div>
                </div>
            </main>
            
        </>
    )
}