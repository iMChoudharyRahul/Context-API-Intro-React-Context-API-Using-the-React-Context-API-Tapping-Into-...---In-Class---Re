import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";

const UserProfile = () => {
  const localVar = useContext(UserContext);
  return (
    <>
      <h1 id="name">Name:- {localVar.name}</h1>
      <h1 id="age">Age:- {localVar.age}</h1>
    </>
  );
};

export { UserProfile };
