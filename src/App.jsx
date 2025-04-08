import "./App.css";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="main-conatiner flex gap-3 ">
        <div className="right-conatiner w-[70%] p-4 border-2">
          <Blogs />
        </div>
        <div className="left-container w-[30%] p-4 border-2 ">
          <h1>Reading Time : 0</h1>
          <h1>Bookmarked Count : 0</h1>
        </div>
      </div>
    </>
  );
}

export default App;
