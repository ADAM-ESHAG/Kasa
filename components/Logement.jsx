//----Logement components----//

import Navbar from "./Navbar"
import MainLogement from "./MainLogement"
import Footer from "./Footer"
import data from "../data"

export default function Logement() {
    const myData = data.map(item => {
        return (
          <MainLogement 
              key={item.id}
              item={item}
          />
        )
      })

    return (
        <>
            <Navbar />
            <main className="main--logement">
                {myData}
            </main>
            <Footer />
        </>
    )
}