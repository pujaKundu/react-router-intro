import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Detail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h3>Friend detail of : {friendId}</h3>
      <h5>{friend.name}</h5>
      <p>Phone: {friend.phone}</p>
      <p>Company: {friend.company?.name}</p>
    </div>
  );
};

export default Detail;
