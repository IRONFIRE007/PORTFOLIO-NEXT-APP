import React from "react";
import { BodyProject } from "./ui/BodyProject";
import styles from "../styles/Projects.module.css";
export const Projects = () => {
  return (
    <div className={styles.body}>
      <BodyProject img={"/img/bg2.png"} title={"Awesome Parallax Scroll"} />

      <BodyProject img={"/img/bg2.png"} title={"Awesome Parallax Scroll"} />

      <BodyProject img={"/img/bg2.png"} title={"Awesome Parallax Scroll"} />
    </div>
  );
};
