//---Home page---//
import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"
import data from "../data"
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
            <div className='head-background'>
                <div className='background--image'>
                    <h2>Chez vous, partout et ailleurs</h2>
                </div>
            </div>
            <main className="mainContent">
                {myData}
            </main>
            <Footer />
        </div>
    )
}