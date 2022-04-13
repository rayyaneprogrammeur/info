import Nav from "./components/Nav";
import Home from "./components/Home";
import Units from "./components/Unit";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="units/:id" element={<Units />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
{
  /* </Router>
     <Hero />
     <AboutUs />
     <Units />
     <ContactUs />
     <Representation />
     <Footer /> */
}
