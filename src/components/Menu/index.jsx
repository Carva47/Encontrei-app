import React from "react";
import "./Menu.css"

function Menu() {
  return (
        <div className="container">
           <ul className="navbar-nav ml-auto">
                 <li><button>Home</button> </li>
                 <li><button>Achado</button> </li>
                 <li><button>Perdido</button> </li>
                 <li><button>Contacto</button> </li>
                 <li><button className="cd"> Cadastrar Item</button> </li>
            </ul>
         
        </div>
  );
}

export default Menu;