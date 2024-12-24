import React from "react";
import "../styles/MenuItem.css";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="menu-item-content">
        <h3>{item.name}</h3>
        <p className="description">{item.description}</p>
        <p className="price">{item.price.toFixed(2)} ₺</p>
      </div>
    </div>
  );
};

export default MenuItem;
