import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About"/>

      <div className="container my-3">
        <TextForm heading = "Enter Your Text To Analyze Below"/>
      </div>
    </>
  );
}

export default App;
