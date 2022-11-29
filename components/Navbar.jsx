//----Navbar components-----//
import kasaLogo from '/images/LOGO.webp' //--Import logo---//

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src={kasaLogo} alt="kasa-logo" className='nav--logo'/>
                <div className='nav--pages'>
                    <a href="#">Accueil</a>
                    <a href="#">A Props</a>
                </div>
            </nav>
            <div className='head-background'>
                <div className='background--image'>
                    <h2>Chez vous, partout et ailleurs</h2>
                </div>
            </div>
        </header>
    )
}