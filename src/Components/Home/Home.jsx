import "./Home.scss"
import Hero from "../Hero/Hero";
import Header from "../Header/Header";

function Home() {
    return (
        <div className="container">
            <Header/>
         <Hero/>
        </div>
    )
}

export default Home;