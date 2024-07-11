import React from "react";

import styles from "./browserTabGroup.module.css";

function BrowserTabGroup({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default BrowserTabGroup;
