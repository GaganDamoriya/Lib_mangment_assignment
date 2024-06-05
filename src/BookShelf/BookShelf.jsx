import React, { useState, useEffect } from "react";
import "./bookshelf.css";
import Carousel from "../Components/Carousel/Carousel";

const BookShelf = () => {
  const [data, setData] = useState([]);
  const [relodPage, setRelodPage] = useState(false);
  const fetchLocalData = () => {
    let existingData = JSON.parse(localStorage.getItem("bookshelf")) || [];
    console.log(existingData);
    setData(existingData);
  };

  const handleRelod = () => {
    setRelodPage(!relodPage);
  };

  useEffect(() => {
    fetchLocalData();
  }, [relodPage]);
  return (
    <div className="bookshelf_div">
      <div className="content">
        <h2># my BookShelf</h2>
        <div className="showBooks">
          {data.length > 0
            ? data.map((book, i) => (
                <div key={i} className="card">
                  <Carousel id={i} data={book} relod={handleRelod} />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
