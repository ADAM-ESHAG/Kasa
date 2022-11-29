//---Footer---//
import kasaLogo from '/images/LOGO.webp' //--Import logo---//

export default function Footer() {
    return (
        <footer className="footer">
            <div className='footer--content'>
                <img src={kasaLogo} alt="kasa-logo" className='footer--logo'/>
                <p><span>© 2022 Kasa. All rights reserved</span></p>
            </div>
        </footer>
    )
}