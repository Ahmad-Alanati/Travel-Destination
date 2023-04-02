import Header from "../header/Header"
import Tours from "../tours/Tours"
import Footer from "../footer/Footer"
let data = require('../../Data/db.json');

function Home() {
    return (
        <>
            <Header />
            {
                data.map(tours=>{
                    return (
                        <Tours name = {tours.name} image = {tours.image}/>
                    )
                })
            }
            <Footer />
        </>
    );
}

export default Home;