import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import ManualCheckQueue from "./pages/ManualCheckQueue/ManualCheckQueue";
import PublishAwards from "./pages/PublishAwards/PublishAwards";
import AbuserList from "./pages/AbuserList/AbuserList";


import './styles/main.scss';

function App() {
  return (
    <div className='app'>
      <Router>
       <ScrollToTop />
          <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/manualCheckQueue" 
            element={
            <ProtectedRoute password="KEUX2026">
              <ManualCheckQueue/>
            </ProtectedRoute>
            }
          />
          <Route path="/publishAwards" 
            element={
            <ProtectedRoute password="KEUX2026">
              <PublishAwards/>
            </ProtectedRoute>
            }
          />
          <Route path="/abuserList" element={<AbuserList />} />
        </Routes>

        <Footer />

      </Router>  
    </div>
  );
}

export default App;
