import { useEffect, useState } from "react";

function UserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []); // runs only once when component loads

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h3>User Details</h3>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
    </div>
  );
}

export default UserData;
