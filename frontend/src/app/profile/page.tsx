"use client";

import { use, useEffect, useState } from "react";
import Form from "next/form";
import { profile } from "console";
// import { User } from "../types";

interface ProfileInfo {
  name: string;
  email: string;
  password: string;
}

export default function ProfilePage() {
  const [profileInfo, setProfileInfo] = useState({
    name: "Your Name",
    email: "Your Email",
  });
  const [editMode, setEditMode] = useState(false);
  const [editInfo, setEditInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    // fetch("localhost:3000/profile")
    // .then((res) => res.json())
    // .then((data) => {
    //   setProfileInfo({
    //     name: data.name,
    //     email: data.email,
    //   }); 
    // });
    setProfileInfo({
      name: "John Doe",
      email: "john.doe@gmail.com",
    })
  }, []);

  useEffect(() => {
    console.log(profileInfo);
  },[profileInfo]);

  const goToEdit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // fetch("localhost:3000/profile")
    // .then((res) => res.json())
    // .then((data) => {
    //   setProfileInfo(data);
      // setEditInfo({
      //   name: profileInfo.name,
      //   email: profileInfo.email,
      //   password: data.password,
      // });
    // });

    // call password from backend

    setEditInfo({
      name: profileInfo.name,
      email: profileInfo.email,
      password: "123456",
    });

    setEditMode(true);
  }

  const handleEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const name = event.target.name.split("-")[0];
    const value = event.target.value;

    setEditInfo(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(editInfo.password)
    if (editInfo.password === "") {
      alert("Please enter your password to save changes.");
      return;
    }
    if (editInfo.name === "") {
      editInfo.name = profileInfo.name;
    }
    if (editInfo.email === "") {
      editInfo.email = profileInfo.email;
    }
    
    setProfileInfo({
      name: editInfo.name,
      email: editInfo.email,
    });
    setEditInfo({
      name: "",
      email: "",
      password: "",
    });

    setEditMode(false);
  }
  
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
        <hr className="w-100 bg-black test-black h-0.5"/>
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
              {profileInfo.name}
            </h2>
            <h3
              className="text-lg font-light 2rem"
            >
              {profileInfo.email}
            </h3>
            <button
              className="w-100 h-50 bg-[#824670] hover:bg-[#824670] text-[#fdf6ba] font-bold py-2 px-4 rounded"
              onClick={goToEdit}
            >
              Edit Profile
            </button>
          </div>
        ) : (
          <div>
            <form className="flex flex-col items-start justify-center gap-4" onSubmit={handleSubmit}>
              <label className="flex flex-row gap-2 items-center">
                <p>Name:</p>
                <input className="p-2" type="text" name="name-input" placeholder={profileInfo.name} onChange={handleEdit}/>
              </label>
              <label className="flex flex-row gap-2 items-center">
                <p>Email:</p>
                <input className="p-2" type="text" name="email-input" placeholder={profileInfo.email} onChange={handleEdit}/>
              </label>
              <label className="flex flex-row gap-2 items-center">
                <p>Password:</p>
                <input className="p-2" type="password" name="password-input" onChange={handleEdit}/>
              </label>
              <input className="w-100 h-50 bg-[#824670] hover:bg-[#824670] text-[#fdf6ba] font-bold py-2 px-4 rounded" type="submit" value="Submit"/>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
