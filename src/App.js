import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';

import './app.css';


const App = () => {
   return (
      <div className="contenedor-principal">
         
         <Navbar/>
         <Body />
         


      </div>

   );
   


};

ReactDOM.render(<App/>, document.getElementById("root"));
