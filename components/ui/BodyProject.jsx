import React from "react";
import styles from "../../styles/Projects.module.css";
import Image from "next/image";

export const BodyProject = ({ img, title }) => {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h2>{title}</h2>
        <div className={styles.container}>
          <div className={`${styles.imgBox} ${styles.jarallax}`}>
            <Image
              src={img}
              className={styles.bg}
              objectFit="cover"
              layout="fill"
              id="bg"
            />
          </div>

          <div className={styles.content}>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
              beatae asperiores, sequi, molestiae obcaecati id, in laboriosam
              sunt ad ipsam et voluptatum atque eaque eius quaerat maxime unde
              ut porro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
