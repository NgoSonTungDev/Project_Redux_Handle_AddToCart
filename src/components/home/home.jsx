import React, { useState } from "react";
import "./home.css";
import listData from "../../asset/data/data";
import Card from "../card/Card";

const Home = () => {

  return (
    <div className="home-body">
      {listData.map((item) => (
         <Card itemData={item}/>
      ))}
    </div>
  );
};

export default Home;
