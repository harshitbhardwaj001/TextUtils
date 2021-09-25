import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }

  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-' + cls)

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
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>
            <Route path="/">
              <TextForm
                heading="Enter Your Text To Analyze Below"
                showAlert={showAlert} mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
