import React from "react";
import "./Shop.css";
import Nav from "../components/nav/Nav";
import product_data from "../product_data";
import combo_data from "../combo_data";

export const Shop = () => {
  console.log(product_data);
  const listItems = product_data.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} alt="" className="imge" />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          <span>{item.currency}</span>
          {item.price}
        </p>
        <div className="btn">
          <button className="bbtns">View</button>
        </div>
      </div>
    </div>
  ));
  console.log(combo_data);
  const listItem = combo_data.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} alt="" className="imge" />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">
          <button className="bbtns">View</button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Nav />
      <div className="containerz">{listItems}</div>;
      <div className="containerz">{listItem}</div>
      <div className="containerz">{listItems}</div>;
      <div className="containerz">{listItem}</div>
    </>
  );
};
