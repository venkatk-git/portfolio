import styles from "./movingBorder.module.css";

function MovingBorder({ intensity, children }) {
  return <div className={styles.movingBorderBox}>{children}</div>;
}

export default MovingBorder;
