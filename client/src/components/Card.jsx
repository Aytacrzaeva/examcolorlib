import React, { useEffect, useState } from "react";
import "./Card.scss";
import axios from "axios";
import { Link } from "react-router-dom";
const Card = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dummys, setDummy] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:7070/").then((res) => {
      setData(res.data);
    });
  }, [searchValue === "", dummys]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearchValue(e.target.value);
          setData(
            data.filter((item) => item.name && item.name.includes(searchValue))
          );
        }}
      />
        <button
        onClick={() => {
          setData([...data.sort((a, b) => b.price - a.price)]);
        }}
      >
        Sort By Price
      </button>
    <div className="cards">
      <button>sort</button>
      {data.map((item, index) => {
        return (
          <div key={item.id} className="card">
            <div className="card__img">
              <img src="https://preview.colorlib.com/theme/cozastore/images/product-07.jpg" />
            </div>
            <button
              className="btn"
              onClick={(e) => {
                axios
                  .delete(`http://localhost:7070/${item._id}`)
                  .then((res) => {
                    setDummy(true);
                  });
              }}
            >
              Delete
            </button>
            <div className="card__body">
              <Link to={`/${item._id}`}>Go go goo</Link>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          </div>
        );
      })}
    </div> </div>
   
  );
};

export default Card;
