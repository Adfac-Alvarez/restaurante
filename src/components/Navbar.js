import React from 'react';
import './navbar.css';


const Navbar = () => {
    
    return (
       
      
      <nav>  
        
         <div className="redes-sociales">
                   
                   <i className="fab fa-twitter"></i>
                   <i className="fab fa-facebook-f"></i>
                   <i className="fab fa-linkedin"></i>
                   <i className="fab fa-whatsapp"></i>
               
         </div>
             
             <div className="contenedor-enlaces">
            
              <h2 className="logo">  Copey-Store </h2>
              
              
                      <ul className="enlaces-nav">
                        
                        <li>INICIA SESION</li>
                        <li>REGISTRATE</li>
                        <li>UNETE A NOSOTROS</li>
                        <li>CONTACTANOS</li>
                        
                  
                      </ul>
               
         </div>
      </nav>

    );

};
export default Navbar;