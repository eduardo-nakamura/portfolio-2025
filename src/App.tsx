import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Header from './components/Header';
import Template from './pages/Template';
import Dice from './components/Dice';
import { AppContextProvider, useAppContext } from './components/AppContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import WorksList from './pages/WorksList';
// import SimpleBtn from './components/SimpleBtn';

function AppContent() {

  const { count, darkMode } = useAppContext();

  const [isHoveredOrTouched, setIsHoveredOrTouched] = useState(false);

  const handleMouseEnter = () => {
    setIsHoveredOrTouched(true);
  };

  const handleMouseLeave = () => {
    setIsHoveredOrTouched(false);
  };

  const handleTouchStart = () => {
    setIsHoveredOrTouched(true);
  };

  const handleTouchEnd = () => {
    setIsHoveredOrTouched(false);
  };

  const initialX = 0;
  const movedX = -30;
// base: process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/portfolio-2025' : '/'}>

      <div style={{ minHeight: '90vh' }} className={`fonts__${count} ${darkMode ? 'darkmode' : ''}`}>
        <Header />
        <motion.div
          style={{
            borderRadius: '10px',
            position: 'fixed',
            right: -40,
            bottom: -10,
            padding: '20px',
            backgroundColor: `${darkMode ? 'var(--color-4)' : 'var(--color-2)'}`,
                    zIndex: '10'
          }}
          initial={{ x: initialX, rotate: 0 }}
          animate={{ x: isHoveredOrTouched ? movedX : initialX, rotate: isHoveredOrTouched ? -20 : 0 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
        >
          <Dice icon={true} />
        </motion.div>
        <div className="containerAll">


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works/:Id" element={<Works />} />
            <Route path="/works" element={<WorksList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/template" element={<Template />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}

export default App;