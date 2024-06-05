import "./carousel.css";
import { useLocation } from "react-router-dom";
import {
  storeDatalocally,
  deleteStoredLocally,
  truncateString,
} from "../CommonFunctions";
import toast, { Toaster } from "react-hot-toast";
const Carousel = ({ i, data, relod }) => {
  const location = useLocation();

  //insert book in bookshelf
  const handleInsertBook = () => {
    if (location.pathname == "/") {
      storeDatalocally({ data });
      toast.success("Book has been added to Bookshelf");
    } else {
      deleteStoredLocally(data.isbn[0]); // data.isbn[0] is id
      relod();
      toast.success("Book Deleted");
    }
  };

  return (
    <div className="bookCard" key={i}>
      <div>
        <span className="headings">Book Title : </span>
        <span>{truncateString(data.title)}</span>
      </div>
      <div>
        <span className="headings">Edition count : </span>
        <span>{data.edition_count}</span>
      </div>
      <div>
        <span className="headings">Author : </span>
        <span>{data.author_name ? data.author_name.slice(0, 2) : ""}</span>
      </div>
      <button className="shelfBtn" onClick={handleInsertBook}>
        {location.pathname == "/mybookshelf" ? "Delete" : "Add to bookshelf"}
      </button>
      <Toaster />
    </div>
  );
};

export default Carousel;
