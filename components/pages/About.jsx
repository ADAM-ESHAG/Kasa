import Navbar from "../Navbar"
import MainAbout from "../MainAbout"
import Footer from "../Footer"

export default function About() {
    return (
        <>
            <Navbar />
            <main className="main--logement">
                <MainAbout />
            </main>
            <Footer />
        </>
    )
}