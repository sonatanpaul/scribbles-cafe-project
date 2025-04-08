import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";

function App() {
  const [bookMark, setBookMark] = useState([]);
  const [count, setCount] = useState(0);
  const handleMark = (blog) => {
    setBookMark([...bookMark, blog]);
  };

  const handleCount = (time) => {
    const timeCount = count + time;
    setCount(timeCount);
  };

  return (
    <>
      <Navbar />

      <div className="main-conatiner flex gap-3 ">
        <div className="right-conatiner w-[70%] p-4 border-2">
          <Blogs handleMark={handleMark} handleCount={handleCount} />
        </div>
        <div className="left-container w-[30%] p-4 border-2 ">
          <h1>Reading Time : {count}</h1>
          <h1>Bookmarked Count : {bookMark.length}</h1>
          {bookMark.map((book) => (
            <p className="text-2xl font-semibold" key={book.id}>
              {book.title}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
