import React from "react";
import styles from "./inputBox.module.css";

const InputBox = () => {
  return (
    <div className={styles.InputBox_Wrapper}>
      <input type="text" placeholder="name" name="name" />
    </div>
  );
};
export default InputBox;
