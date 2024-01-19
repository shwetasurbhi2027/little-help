import { useState } from "react";
import Button from "./Button";

export default function App() {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src="" alt="" />
      </div>
      <div className="content">
        <h2>
          It&apos;s me <strong>Name !</strong>
        </h2>
        <h5>
          Hey there! I enjoy web development very much, it makes me feel artsy
          and intellectually strong.I love create such things.
        </h5>
      </div>
      <h5>important Links </h5>
      <div className="buttons">
        {/*  Your task is write four buttons, for your leetCode profile, github, insta if you have, and portFolio. You just  have to create non functioning buttons by reusing the same component. All the changes need to be done in app.js, you just have use the Button component  */}
      </div>
    </div>
  );
}
