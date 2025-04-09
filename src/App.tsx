import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Works from './pages/Works';
import Header from './components/Header';
import Template from './pages/Template';
import { useState } from 'react';
import Dice from './components/Dice';
// import SimpleBtn from './components/SimpleBtn';

function App() {
  const [count, setCount] = useState(0)

  // function changeStyle(){
  //   let novoNumero;
  //   do {
  //     novoNumero = Math.floor(Math.random() * 6); // Gera um número entre 0 e 5
  //   } while (novoNumero === count); // Evita repetição do número anterior
  //   setCount(novoNumero);
  // }

  return (
    <div className={' fonts__' + count}>
      
      <Header />
      {/* <SimpleBtn textbtn={'Roll'} onClick={changeStyle} /> 
      <p>Count: {count}</p> */}
      <Dice count={count} setCount={setCount}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />        
        <Route path="/template" element={<Template />} />
        {/* 
        <Route path="/user/:id" element={<User />} /> */}
      </Routes>



      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>



  )
}

export default App
