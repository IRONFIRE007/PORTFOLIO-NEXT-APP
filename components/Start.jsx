import Image from "next/image";
import React from "react";
import styles from "../styles/Styles.module.css";

export const Start = () => {
  const handleMouseMove = (e) => {
    const moon = document.getElementById("moon");
    moon.style.top = -e.pageY / 12 + "px";
    moon.style.left=  e.pageX /12 + "px";
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <Image
        src="/img/bg.jpg"
        className={styles.bg}
        objectFit="cover"
        layout="fill"
        id="bg"
      />

      <Image
        className={styles.moon}
        src="/img/moon.png"
        layout="fill"
        id="moon"
        objectFit="cover"
      />

      <div className={styles.name}>
        <h1> Luis Agamez </h1>
      </div>

      <div className={styles.information}>
       
      
          <h3>DESARROLLADOR WEB - MOVIL</h3>
      
        <p>
    
         Soy un joven apasionado por la
          programacion y la tecnologia.
        </p>
      </div>
    </div>
  );
};
