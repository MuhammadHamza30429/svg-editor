import React, { useState, useEffect, useRef } from "react";
import * as fabric from "fabric";
import "./App.css";

function App() {
  const canvasRef = useRef();
  const [imageUrl, setImageUrl] = useState("");

  // Fetch image URL from query parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const url = urlParams.get("image_url");
    if (url) {
      setImageUrl(decodeURIComponent(url)); // Decode the URL parameter
    }
  }, []);

  useEffect(() => {
    if (imageUrl) {
      const canvas = new fabric.Canvas(canvasRef.current);
      let imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      imageElement.onload = function () {
        let image = new fabric.Image(imageElement);
        canvas.add(image);
        canvas.centerObject(image);
        canvas.setActiveObject(image);
      };
    }
  }, [imageUrl]); // Trigger this effect whenever `imageUrl` changes

  return (
    <div className="container">
      <div className="container1">
        <canvas
          width="450"
          height="450"
          style={{
            border: "1px dotted white",
          }}
          ref={canvasRef}
        />
      </div>
    </div>
  );
}

export default App;
