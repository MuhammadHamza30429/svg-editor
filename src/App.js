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
          width="400"
          height="400"
          style={{
            border: "1px dotted white",
            // position: "absolute",
            // top: "30%",
            // left: "30%",
          }}
          ref={canvasRef}
        />
      </div>
    </div>
  );
}

export default App;
// import React, { useState, useEffect, useRef } from "react";
// import * as fabric from "fabric";
// import "./App.css";

// function App() {
//   const canvasRef = useRef();
//   const [imageUrl, setImageUrl] = useState("");

//   // Fetch image URL from query parameters
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const url = urlParams.get("image_url");
//     if (url) {
//       setImageUrl(decodeURIComponent(url)); // Decode the URL parameter
//     }
//   }, []);

//   useEffect(() => {
//     if (imageUrl) {
//       const canvas = new fabric.Canvas(canvasRef.current);

//       // Set background color
//       canvas.backgroundColor = "#f0f0f0";
//       canvas.renderAll(); // Update the canvas

//       let imageElement = document.createElement("img");
//       imageElement.src = imageUrl;
//       imageElement.onload = function () {
//         let image = new fabric.Image(imageElement, {
//           left: 50,
//           top: 50,
//           scaleX: 0.5,
//           scaleY: 0.5,
//           shadow: {
//             color: "rgba(0,0,0,0.5)",
//             blur: 10,
//             offsetX: 10,
//             offsetY: 10,
//           },
//           opacity: 0.9,
//         });

//         // Add distortion (skewing)
//         image.set({
//           skewX: 10,
//           skewY: 5,
//         });

//         // Add blending mode
//         image.set("globalCompositeOperation", "multiply");

//         canvas.add(image);
//         canvas.centerObject(image);
//         canvas.setActiveObject(image);

//         // Enable image wrapping by adding a border or stroke
//         image.set({
//           stroke: "blue",
//           strokeWidth: 5,
//         });

//         canvas.renderAll();
//       };

//       // Add interactive scaling logging
//       canvas.on("object:scaling", (event) => {
//         const obj = event.target;
//         console.log("Scaling object:", obj.scaleX, obj.scaleY);
//       });
//     }
//   }, [imageUrl]); // Trigger this effect whenever `imageUrl` changes

//   return (
//     <div className="container">
//       <canvas
//         width="500"
//         height="500"
//         style={{
//           border: "1px dotted white",
//         }}
//         ref={canvasRef}
//       />
//     </div>
//   );
// }

// export default App;
