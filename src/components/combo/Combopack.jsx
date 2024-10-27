import React from "react";
import combo_data from "../../combo_data";

const Combopack = () => {
  console.log(combo_data);
  const listItems = combo_data.map((item) => (
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
      <div className="tdmain">
        <div className="linef"></div>
        <div className="hading">
          <h3>Combo Pack</h3>
        </div>
        <div className="lines"></div>
      </div>

      <div className="containerz">{listItems}</div>
    </>
  );
};

export default Combopack;
