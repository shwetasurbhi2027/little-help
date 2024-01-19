import { useState } from "react";
import Button from "./Button";

export default function App() {
  return (
    <div className="container">
      <div className="imageContainer">
        <img src="" alt="https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fHww" />
      </div>
      <div className="content">
        <h2>
          It&apos;s me <strong>Shweta Surbhi!</strong>
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
