//----Logement components----//

import Navbar from "../Navbar"
import MainLogement from "../MainLogement"
import Footer from "../Footer"
import data from "../../data"

export default function Logement() {

    return (
        <>
            <Navbar />
            <main className="main--logement">
                <MainLogement />
            </main>
            <Footer />
        </>
    )
}