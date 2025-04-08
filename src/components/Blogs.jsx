import { useEffect, useState } from "react";
import Blog from "./Blog";

export default function Blogs({ handleMark, handleCount }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1 className="text-3xl">Blogs : {data.length}</h1>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {data.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleMark={handleMark}
            handleCount={handleCount}
          />
        ))}
      </div>
    </>
  );
}
