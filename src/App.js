import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "";
      document.body.style.color = "#212529";
      showAlert("Light Mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled.", "success");
    }
  };
  return (
    <>
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
              <TextForm heading="Enter Your Text To Analyze Below" showAlert={showAlert}/>
        </div>
    </>
  );
}

export default App;
