import heroImg from "../../assets/hero.webp";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <img src={heroImg} alt="hero img" className={styles.heroImage} />
    </div>
  );
};

export default Hero;
