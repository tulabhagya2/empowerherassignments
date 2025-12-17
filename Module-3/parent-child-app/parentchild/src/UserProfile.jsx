import React from "react";
import UserInfo from "./UserInfo";

const UserProfile = () => {
  const name = "Bhagya Sri";
  const age = 23;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={name} age={age} />
    </div>
  );
};

export default UserProfile;
