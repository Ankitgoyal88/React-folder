import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Conveted to uppercase", "success");
  };
  const handleLoClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Conveted to lowercase", "success")
  };
  const handleClearClick = () => {
    // console.log("uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showalert("All text clear", "success")
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showalert("All Text copy", "success")
  };

  const handleExtraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Remove Extra Space", "success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        <button
          className="btn btn-outline-primary mx-2"
          onClick={handleUpClick}
        >
          Convert UpperCase
        </button>
        <button
          className="btn btn-outline-success mx-2"
          onClick={handleLoClick}
        >
          Convert LowerCase
        </button>
        <button
          className="btn btn-outline-danger mx-2"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-outline-info mx-2" onClick={copyText}>
          Copy Text
        </button>
        <button
          className="btn btn-outline-info mx-2"
          onClick={handleExtraspaces}
        >
          Remove extra Spaces
        </button>
      </div>
      <div
        className="containe my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {" "}
          {text.split(" ").length} Words and {text.length} charcater{" "}
        </p>
        <p> {0.008 * text.split(" ").length} Minute Read</p>
      </div>
      <h2>Preview</h2>

      <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </>
  );
}
