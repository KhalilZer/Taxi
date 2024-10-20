import { useState } from 'react'

import './App.css'
import Home from './Pages/Home'
import Formulaire from './Components/Formulaire';
import Services from './Components/Services';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <div className="wrapper bg-transparent bg-center  bg-cover bg-no-repeat ">
        <div
          class="w-full h-full 
            backdrop-brightness-50"
        >
          <Home />
        </div>
      </div>
      <Formulaire />
      <Services />
      <Contact/>
    </div>
  );
}

export default App
