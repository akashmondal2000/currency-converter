import React from "react";
import styles from "./inputBox.module.css";



const InputBox = ({
  currencyOptions = []

}) => {
  console.log("=>",currencyOptions);
  
  return (
    <div className={styles.inputBox_container}>
      <div className={styles.input_wrapper}>

        <label htmlFor="" className={styles.input_label}>
          usd
        </label>
        <input type="number" className={styles.inputBox} />

      </div>

      <div className={styles.inputBox_wrapper_select}>
        <p className={styles.inputBox_wrapper_select_text}>Currency type</p>
        <select className={styles.inputBox_select}
        // value={}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default InputBox;
