import { InputBox } from "./components";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container_wrapper}>
        <div className={styles.form_wrapper}>
          <form>
            <div className={styles.first_input_wrapper}>
              <InputBox />
            </div>
            <div className={styles.swapBtn_wrapper}>
              <button type="button" className={styles.swap_btn}>
                swap
              </button>
            </div>
            <div className={styles.second_input_wrapper}>
              <InputBox />
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
