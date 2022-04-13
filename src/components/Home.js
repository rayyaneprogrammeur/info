import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Units from "./Units";
import ContactUs from "./ContactUs";

function Home() {
    return (
      <div className="App">
        <Hero />
        <AboutUs />
        <Units />
        <ContactUs />
      </div>
    );
  }
  
  export default Home;