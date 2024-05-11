import React from 'react'
import styles from './inputBox.module.css'

const InputBox = () => {
  return (
    <>
     <p className={styles.maindiv}>InputBox</p>
     <input className={styles.InputBox} 
     type="text"
      placeholder='akash'
     />

    </>
   
    
  )
}
;
export default InputBox;