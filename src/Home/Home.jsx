import React, { useState, useEffect } from "react";
import "./home.css";
import SearchBar from "../Components/SearchTab/SearchBar";
import axios from "axios";
import Carousel from "../Components/Carousel/Carousel";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const [query, setQuery] = useState("");
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = async (e) => {
    setQuery(e);
    console.log(query);
    setLoading(true);
  };

  const getData = async () => {
    if (query != "") {
      try {
        const res = await axios.get(
          `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
        );
        console.log(res.data.docs);
        setBookData(res.data.docs);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    const timerId = setTimeout(getData, 500); // Call fetchApi after 500ms of no change
    return () => clearTimeout(timerId);
  }, [query]); // Call useEffect when query or debouncedFetch changes

  return (
    <div className="home">
      <div className="content">
        <SearchBar updateQuery={handleChange} />

        {/* display query books */}

        <h2>Search Result </h2>

        <div className="showBooks">
          {bookData.length > 0 ? (
            !loading ? (
              bookData.map((book, i) => (
                <div key={i} className="card">
                  <Carousel id={i} data={book} relod={() => {}} />
                </div>
              ))
            ) : (
              <div className="load"> Loading...</div>
            )
          ) : (
            <div className="load"> Enter some Query</div>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Home;
