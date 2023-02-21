import React, { useState } from "react";


export default function CompC() {
  const [name, setName] = useState({
    fname: "",
    lname: "mah"
  });
  return (
    <div className="App">
      <h1>Hello Form</h1>
      <input
        value={name.fname}
        onChange={(e) => {
          setName((pre) => {
            return { ...pre, fname: e.target.value };
          });
        }}
      />
      <p>
        My name is {name.fname} {name.lname}{" "}
      </p>
    </div>
  );
}