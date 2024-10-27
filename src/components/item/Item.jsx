import "./Item.css";
import React from "react";
import product_data from "../../product_data";

const Item = () => {
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

  return <div className="containerz">{listItems}</div>;
};

export default Item;
