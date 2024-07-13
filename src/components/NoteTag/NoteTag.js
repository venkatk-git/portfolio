import React from "react";

import styles from "./noteTag.module.css";

function NoteTag({ children }) {
  return (
    <div className={styles.wrapper}>
      <span>{children}</span>
      <span>🟢</span>
    </div>
  );
}

export default NoteTag;
