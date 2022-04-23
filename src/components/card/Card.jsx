import React, { useState, useCallback } from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { addDataCart } from "../../Redux/action";
import { v4 as uuidv4 } from "uuid";

const Card = (props) => {
  const item = props.itemData;
  const dispatch = useDispatch();

  const handleAddStore = (item) => {
    dispatch(addDataCart(item));
  };

  return (
    <div className="cardMoveMain">
      <div className="img1">
        <img src={item.img} alt="" />
      </div>
      <div className="title">
        <p>{item.title}</p>{" "}
      </div>
      <div className="text">
        <button onClick={() => handleAddStore(item)}>Add to cart</button>
      </div>
      <div className="catagory">
        {item.price} <i className="fas fa-film"></i>
      </div>

      <div className="views">
        {item.author} <i className="far fa-eye"></i>{" "}
      </div>
    </div>
  );
};

export default Card;
