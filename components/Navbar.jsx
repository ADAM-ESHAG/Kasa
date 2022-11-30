//----Navbar components-----//
import kasaLogo from '/images/LOGO.webp' //--Import logo---//
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src={kasaLogo} alt="kasa-logo" className='nav--logo'/>
                <ul className='nav--pages'>
                    <li><Link to='/' className='nav--link'>Accueil</Link></li>
                    <li><Link to='./About' className='nav--link'>A Props</Link></li>
                </ul>
            </nav>
        </header>
    )
}