//---Home page---//
import Navbar from "../Navbar"
import MainContent from "../MainContent"
import Footer from "../Footer"
import data from "../../data"
export default function Home() {

    const myData = data.map(item => {
        return (
          <MainContent 
              key={item.id}
              item={item}
          />
        )
      })

    return (
        <div className="container">
            <Navbar />
            <div className='background--image'>
                <img src="/images/head-background.webp" alt="image/webp" />
                <h2>Chez vous, partout et ailleurs</h2>
            </div>
            <main className="mainContent">
                {myData}
            </main>
            <Footer />
        </div>
    )
}