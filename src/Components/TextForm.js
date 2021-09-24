import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    console.log("You have clicked on handleUpClick");
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    console.log("You have clicked on handleLoClick");
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
      </div>
      <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} minutes read.</p>
          <h2>Preview</h2>
          <p>{text}</p>
      </div>
    </>
  );
}
