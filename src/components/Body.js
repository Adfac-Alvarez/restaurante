import React from 'react';
import Rest from '../restaurante.jpg';
import Drog from '../droguerias.jpg';
import Merc from '../mercados.jpg';
import Tec from  '../tecnologia.jpg';
import Prendas from '../prendas.jpg';
import './Body.css';

const Body = () => {
    return (
       <div className="body">
             <div className="body-imagen">
                 <img src={Rest}></img>
                 <button className="boton">Restaurantes</button>
             </div>
             
             <div className="body-imagen">
                 <img src={Merc}></img>
                 <button className="boton">Tiendas de Mercado</button>

             </div>
             <div className="body-imagen">
                 <img src={Tec}></img>
                 <button className="boton">Tecnologia</button>

             </div>
             <div className="body-imagen">
                 <img src={Prendas}></img>
                 <button className="boton">Almacenes De Ropa</button>
             </div>
             <div className="body-imagen">
                 <img src={Drog}></img>
                 <button className="boton">Droguerias</button>
             </div>
            
       </div>

    );
};

export default Body;