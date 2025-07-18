import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function MenuItemCard({ menuItem, refEl }) {
  const [mainImage, setMainImage] = useState(
    Array.isArray(menuItem.image) ? menuItem.image[0] : menuItem.image
  );

  const thumbnails = Array.isArray(menuItem.image)
    ? menuItem.image
    : [menuItem.image];

  return (
    <div className="menuItem" ref={refEl}>
      <div className="events">
        <h2 className="category-title">{menuItem.name}</h2>
      </div>

      <div className="eventimage">
        <img
          src={mainImage}
          alt={menuItem.name}
          className="category main-image"
        />
        
      </div>
      <div className="thumbnails">
          {thumbnails.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`thumb-${i}`}
              className={`thumb-image ${img === mainImage ? 'selected' : ''}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>

      <div className="price">
        <p style={{ textDecoration: 'underline' }}>
          <strong>Rs.249</strong>
        </p>
        <p1> <u><strong>Prize: Rs.10,000</strong></u></p1>
      </div>

      <div className="hoverContent">
        <p>{menuItem.description}</p>
      </div>

      {/* Only this button triggers the route */}
      <Link to={menuItem.Link}>
        <button className="expandButton">View Events</button>
      </Link>
    </div>
  );
}

export default MenuItemCard;
