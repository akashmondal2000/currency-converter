import React,{useId} from "react";
import styles from "./inputBox.module.css";

const InputBox = ({
  currencyOptions = [],
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) => {
  console.log("=>", currencyOptions);
  const amountInputId = useId()

  return (
    <div className={`${styles.inputBox_container} ${className}`}>
      <div className={styles.input_wrapper}>
        <label htmlFor={amountInputId} className={styles.input_label}>
          {label}
        </label>
        <input
        id={amountInputId}
          type="number"
          className={styles.inputBox}
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} 
        />
      </div>

      <div className={styles.inputBox_wrapper_select}>
        <p className={styles.inputBox_wrapper_select_text}>Currency type</p>
        <select
          className={styles.inputBox_select}
           value={selectCurrency}
           onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
           disabled={currencyDisabled}
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
