import React from 'react'
import styles from "../styles/Styles.module.css";
import { Card } from "./ui/Card";

export const Programs = () => {
  return (
    <div className={styles.tacnologiesContainer}>
      <Card title={"JAVA"} pack='/img/java.png'  level={'Intermedio'}/>
      <Card title={"JAVASCRITP"}  pack={"/img/js.png"}  level={'Avanzado'}/>
      <Card title={"PHP"}  pack={"/img/php.png"}  level={'intermedio'}/>
    </div>
  )
}
