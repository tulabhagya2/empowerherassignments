import React from "react";

const MessageCard = ({ title, message }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "5px",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default MessageCard;
