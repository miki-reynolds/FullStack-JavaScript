import { useState } from 'react'


const Header = (props) => <div>{props.title}</div>;
 
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  if (props.allFeedback.length === 0) {
    return <div>No feedback</div>
  };

  const count = {};

  for (let el of props.allFeedback) {
    count[el] ? count[el]++ : count[el] = 1;
  };

  return (
    <div>
      <h1>Statistics</h1>
      <ul>
        {Object.entries(count).map(([key, value]) => (
          <li key={key}>{key} {value}</li>
      ))}
      </ul>
    </div>
  )
}


const App = () => {
  const title = 'Give Feedback'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAll] = useState([])

  const handleGood = () => {
    setAll(allFeedback.concat('Good'))
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setAll(allFeedback.concat('Neutral'))
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setAll(allFeedback.concat('Bad'))
    setBad(bad + 1)
  }

  return (
    <div>
      <Header title={title} />
      <span>G {good}</span>
      <Button handleClick={handleGood} text='Good' />
      <span>N {neutral}</span>
      <Button handleClick={handleNeutral} text='Neutral' />
      <span>B {bad}</span>
      <Button handleClick={handleBad} text='Bad' />
      <Statistics allFeedback={allFeedback} />
    </div>
  )
}

export default App;


// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// export default App;
