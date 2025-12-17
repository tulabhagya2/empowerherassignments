import React from "react";

const UserInfo = ({ name, age }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserInfo;
