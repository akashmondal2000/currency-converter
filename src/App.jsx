import { InputBox } from "./components";
import styles from "./App.module.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

const App = () => {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState('usd');
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount]=useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  //swap
  const swap = () =>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  //for display final Converted amount ex.(12.84 * 65.99 = 847.3116)
  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  return (
    <div className={styles.main_container}>
      <div className={styles.container_wrapper}>
        <div className={styles.form_wrapper}>
          <form onSubmit={(e)=>{
            e.preventDefault();
            convert();
          }}>
            <div className={styles.first_input_wrapper}>
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setAmount(amount)}
              selectCurrency={from}
              onAmountChange={(amount)=>setAmount(amount)}
               />
            </div>
            <div className={styles.swapBtn_wrapper}>
              <button type="button" className={styles.swap_btn} onClick={swap}>
                swap
              </button>
            </div>
            <div className={styles.second_input_wrapper}>
              <InputBox 
              label="to"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency)=>setTo(currency)}
              selectCurrency={to}
              amountDisabled
              />
            </div>
            <button type="submit" className={styles.convert_btn}>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
