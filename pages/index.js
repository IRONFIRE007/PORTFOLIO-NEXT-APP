import React from "react";
import { Main } from "../components/Main";
import { Programs } from "../components/Programs";
import { Start } from "../components/Start";
import { Navbar } from "../components/ui/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Start />
      <Main />
      <Programs/>
    </>
  );
};

export default Home;
