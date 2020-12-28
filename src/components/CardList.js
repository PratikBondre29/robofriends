import React from "react";
import Card from "./Card";

function CardList({ robots }) {
  return (
    <>
      <div className="row mx-auto">
        {robots.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-3 mx-auto">
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              email={item.email}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardList;
