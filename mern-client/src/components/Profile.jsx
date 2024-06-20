import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import userImg from "../assets/profile.jpg";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Profile</h2>

      <div className="flex lg:w-[1180px] flex-col flex-wrap gap-4 bg-gray-300 rounded-2xl p-20">
        <img className="h-32 w-32 rounded-lg " src={user?.photoURL} alt="" />
        <h2 className="font-semibold">UID: {user?.uid || "UID"}</h2>
        <h2 className="font-semibold">Name: {user?.displayName || "Demo"}</h2>
        <h2 className="font-semibold">Email: {user?.email || "demo@gmail.com"}</h2>
        <h2 className="font-semibold">Verified User: {user?.emailVerified ? "Yes" : "No" || "Not Verified yet"}</h2>
      </div>
    </div>
  );
};

export default Profile;
