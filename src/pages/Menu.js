import React from 'react';
import { MenuList } from '../helpers/MenuList';
import '../styles/Menu.css';

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <div key={key} className="menuItem">
            <div style={{ backgroundImage: `url(${menuItem.image})` }}></div>
            <h1>{menuItem.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
