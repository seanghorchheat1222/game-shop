import styles from './q&a.module.css'
import { useState } from 'react'


const QandA = () => {

  const questions = [
    {
      q: "Q1: What is a video game?",
      a: "A: A digital interactive entertainment where players control characters or systems to achieve goals."
    },
    {
      q: "Q2: What are the most popular game genres?",
      a: "A: Action, Adventure, RPG, Simulation, Strategy, Sports, Racing, and Puzzle."
    },
      {
      q: "Q2: What platforms are most common for gaming?",
      a: "A: Popular platforms include PC, PlayStation, Xbox, Nintendo Switch, and Mobile (iOS/Android)."
    },
  ]

    const [openIndexs, setOpenIndexes] = useState([]);
    const toggleDropdown = (index) => {
    if(openIndexs.includes(index)){
      setOpenIndexes(openIndexs.filter(i => i !== index));
    }else{
      setOpenIndexes([...openIndexs, index]);
    }
    }

  return(
    <>
    <div className="container mt-2" style={{marginBottom: '150px'}}>
      <div className={`${styles.title} mt-3 mb-3`}>
      <p>Question and Answer</p>
      </div>
      <div className="row">
        {questions.map((item, index) => (
      <div key={index} className={`col-lg-12 ${styles.questions} mt-4`}>
        <p>{item.q}</p>
        <div className={`${styles.dropdownline}`}>        
          <span></span>
          <button className={`${styles.btnDropdown} ${openIndexs.includes(index) ? styles.active : ""}`} onClick={() => toggleDropdown(index)} ></button>
        </div>
        <div className={`${styles.dropdown} ${openIndexs.includes(index) ? styles.open : ""}`}>
          <p>
          {item.a}
          </p>
        </div>
        </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default QandA;