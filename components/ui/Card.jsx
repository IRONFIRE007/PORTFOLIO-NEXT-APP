import React from "react";
import styles from "../../styles/Card.module.css";
import Tilt from "react-vanilla-tilt";
import Image from "next/image";

export const Card = ({ title, pack,level }) => {
  return (
    <Tilt
      options={{
        max: 80,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
        perspective: 1000,
        reverse: false,
      }}
      className={styles.card}
    >
      <div className={styles.content}>
        <h2>{title}</h2>
        <h4>{level}</h4>
        <div className={styles.img}>
          <Image src={pack} layout="fill" />
        </div>
      </div>
    </Tilt>
  );
};
