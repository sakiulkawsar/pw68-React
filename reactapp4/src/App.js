
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contract';
import TopNav from './Componenet/TopNav';
import Nav from './Componenet/Nav';
import Service from './Pages/Service';
import Pricing from './Pages/Pricing'; 

function App() {
    return (
        <BrowserRouter>
           

            <div className="content">
              {/* Navbar will add */}
              <TopNav />
              <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/Pricing" element={<Pricing />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}



export default App;
