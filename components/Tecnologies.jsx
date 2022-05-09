import React from "react";
import styles from "../styles/Styles.module.css";
import { Card } from "./ui/Card";

export const Tecnologies = () => {
  return (
    <div className={styles.tacnologiesContainer}>
      <Card title={"HTML"} pack='/img/html.png'  level={'Avanzado'} />
      <Card title={"CSS"}  pack={"/img/css.png"} level={'Avanzado'} />
      <Card title={"NODE"}  pack={"/img/node.png"} level={'Avanzado'}/>
      <Card title={"REACT"}  pack={"/img/react.png"} level={'Avanzado'}/>
      <Card title={"FLUTTER"} pack={"/img/flutter.png"} level={'Avanzado'}/> 
      {/* <Card title={"REACTNATIVE"} pack={"/img/react.png"} /> */}
    </div>
  );
};
