import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import "./Detail.scss";
import Header from "../components/Header";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:7070/${id}`).then((res) => {
      setData(res.data);
    });
  });
  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <Header />
      <div className="detail">
        <div className="detail__img">
          <img
            src="https://preview.colorlib.com/theme/cozastore/images/product-07.jpg"
            alt=""
          />
        </div>
        <div className="detail__items">
          <h1>{data.name}</h1>
          <p>{data.price}</p>         
        </div>
      </div>
    </div>
  );
};

export default Detail;
