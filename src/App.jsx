import { InputBox } from "./components";
import styles from "./App.module.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

const App = () => {
  const [from,setFrom] = useState('usd')

  const currencyInfo = useCurrencyInfo();
  const options = Object.keys(currencyInfo);
  return (
    <div className={styles.main_container}>
      <div className={styles.container_wrapper}>
        <div className={styles.form_wrapper}>
          <form>
            <div className={styles.first_input_wrapper}>
              <InputBox
              currencyOptions={options}
               />
            </div>
            <div className={styles.swapBtn_wrapper}>
              <button type="button" className={styles.swap_btn}>
                swap
              </button>
            </div>
            <div className={styles.second_input_wrapper}>
              <InputBox 
                 currencyOptions = {options}
              />
            </div>
            <button type="submit" className={styles.convert_btn}>
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
