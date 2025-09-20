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

  // If you want to render differently based on status:
  if (menuItem.status !== 'Active') {
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

        {/* <div className="price">
          <p style={{ textDecoration: 'underline' }}>
            <strong>Entry fee: Rs.10</strong>
          </p>
          <p>
            <u><strong>Prize: Rs.10,000</strong></u>
          </p>
        </div> */}

        <div className="hoverContent">
          <p>{menuItem.description}</p>
        </div>

        <button className="expandButton">Event Expired</button>
      </div>
    );
  }

  // Case for "Active"
  return (
    <div className="ActivemenuItem" ref={refEl}>
      <div className="Activeevents">
        <h2 className="Activecategory-title">{menuItem.name}</h2>
      </div>

      <div className="Activeeventimage">
        <img
          src={mainImage}
          alt={menuItem.name}
          className="Activecategory main-image"
        />
      </div>

      <div className="Activethumbnails">
        {thumbnails.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`thumb-${i}`}
            className={`Activethumb-image ${img === mainImage ? 'selected' : ''}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      {/* <div className="Activeprice">
        <p style={{ textDecoration: 'Activeunderline' }}>
          <strong>Entry fee: Rs.10</strong>
        </p>
        <p>
          <u><strong>Prize: Rs.10,000</strong></u>
        </p>
      </div> */}

      <div className="ActivehoverContent">
        <p>{menuItem.description}</p>
      </div>

      {/* Example: only active gets link */}
      <Link to={menuItem.Link}>
        <button className="ActiveexpandButton">View More</button>
      </Link>
    </div>
  );
}

export default MenuItemCard;
