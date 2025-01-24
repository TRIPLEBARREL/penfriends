"use client";

import { useEffect, useState } from "react";
// import { User } from "../types";

export default function ProfilePage() {
  const [profileInfo, setProfileInfo] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // useEffect(() => {
  //   fetch("localhost:3000/profile")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setProfileInfo(data);
  //   });
  // }, []);
  
  return (
    <div
      className="min-h-screen flex items-center justify-start flex-col w-screen"
      style={{
        backgroundColor: "#fdf6ba", // Matches the global background
        fontFamily: "var(--font-bio-rhyme)", // Matches the Penfriends font
      }}
    >
      
      <div
        className="m-10 gap-3"
      >
        <h1 className="text-4xl font-bold">Profile</h1>
        <line x1="0" y1="0" x2="70" y2="0" className="stroke-black stroke-2" />
      </div>
      <div
        className="flex flex-row items-start justify-center gap-10 grow"
      >
        <img
          src='pictures/johndoe.jpg'
          alt="Profile Picture"
          className="h-20 w-20 bg-cover object-cover rounded-full relative"
        />
        {!editMode ? (
          <div
            className="grow-7 gap-4 flex flex-col items-start justify-center"
          >
            <h2
              className="text-2xl font-bold 3rem"
            >
              John Doe
            </h2>
            <h3
              className="text-lg font-light 2rem"
            >
              damon.k.crowley@gmail.com
            </h3>
            <button
              className="w-100 h-50 bg-[#824670] hover:bg-[#824670] text-[#fdf6ba] font-bold py-2 px-4 rounded"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div>
            <form>
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="text" name="email" />
              </label>
              <label>
                Password:
                <input type="text" name="email" />
              </label>
              <input type="submit" value="Submit" onClick={() => {setEditMode(false)}}/>
            </form>
          </div>
        )}
        
      </div>
    </div>
  );
}
