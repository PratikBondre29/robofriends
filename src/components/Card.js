import React from "react";
import "./Card.css";

const Card = ({ id, name, email }) => {
  return (
    <>
      <div className="card">
        <img src={`https://robohash.org/${id}?size=200x200`} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{email}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
