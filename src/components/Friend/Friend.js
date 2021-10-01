import React from "react";
import { Link } from "react-router-dom";

const Friend = (props) => {
  const { id, name, phone, website, address } = props.friend;
  const friendStyle = {
    border: "3px solid goldenrod",
    padding: "10px",
    borderRadius: "5px",
  };
  return (
    <div style={friendStyle}>
      <h2>This is a {name}</h2>
      <h5>Call me: {phone}</h5>
      <h5>Visit me:{website}</h5>
      <h5>Address:{address.city}</h5>
      <Link to={`/friend/${id}`}>Visit Me</Link>
    </div>
  );
};

export default Friend;
