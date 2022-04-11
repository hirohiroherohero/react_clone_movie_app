import React, { useEffect, useState } from 'react';
import Button from './Button'
import styles from './style.module.css'

function App() {
  const [couter, setValue] = useState(0)
  const [keyworld, setKeyworld] = useState('')

  const increase = () => {
    setValue(prev => prev + 1)
  }

  const handleTextInput = (e) => {
    setKeyworld(e.target.value)
  }


  useEffect(() => {
    console.log('한번만 실행')
  }, [])

  useEffect(() => {
    console.log('키워드 작성시에만 실행')
  }, [keyworld])

  useEffect(() => {
    console.log('카운터에만 실행')
  }, [couter])

  useEffect(() => {
    console.log('카운터와 키워드 작성시에 실행')
  }, [keyworld, couter])

  return (
    <>
      <h1 className={styles.title}>{couter}</h1>
      <Button text="click me!" clickEvent={increase}/>

      <div>
        <input type="text" value={keyworld} onChange={handleTextInput}/>
      </div>
    </>
  );
}

export default App;