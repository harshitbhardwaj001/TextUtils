import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About"/>

      <div className="container my-3">
        <TextForm heading = "Enter Your Text To Analyze Below"/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
