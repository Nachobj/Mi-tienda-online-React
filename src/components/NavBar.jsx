// import React from 'react';
import CardWidget from './CardWidget';

const NavBar = () => {
  return (
    <div className = "Menu">
        Tienda Online
        <CardWidget />
        <ul>
            <li className= "nav">
                <a href="">Catalogo 1</a>
                <a href="">Catalogo 2</a>
                <a href="">Catalogo 3</a>
            </li>
        </ul>
    </div>
  );
};

export default NavBar;