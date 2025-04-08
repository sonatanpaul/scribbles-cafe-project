import { IoBookmarks } from "react-icons/io5";

export default function Blog({ blog, handleMark, handleCount }) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <div className="flex gap-4 justify-between items-center">
            <img className="w-16" src={blog.author_img} alt="" />
            <h3 className="text-3xl">{blog.author}</h3>
            <button onClick={() => handleMark(blog)}>
              <IoBookmarks size={28} />
            </button>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleCount(blog.reading_time, blog.id)}
              className="btn btn-primary"
            >
              Mark as Read
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
