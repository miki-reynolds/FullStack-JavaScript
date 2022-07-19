import { useState } from 'react'

const StatisticLine = ({ text, value }) =>
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return (
      <div>
        <h3>Statistics</h3>
        <p>No feedback</p>
      </div>
  )}

  const average = (good - bad) / all;
  const positive = 100 * (good / all);

  return (
    <div>
      <h3>Statistics</h3>
      <table>
        <tbody>
          <StatisticLine text='Good' value={good} />
          <StatisticLine text='Neutral' value={neutral} />
          <StatisticLine text='Bad' value={bad} />
          <StatisticLine text='All' value={all} />
          <StatisticLine text='Average' value={average} />
          <StatisticLine text='Positive' value={positive + '%'} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ handleClick, label}) =>
  <button onClick={handleClick}>{label}</button>
  
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h2>Give Feedback</h2>
      <div>
        <Button handleClick={() => setGood(good + 1)} label='Good' />
        <Button handleClick={() => setNeutral(neutral + 1)} label='Neutral' />
        <Button handleClick={() => setBad(bad + 1)} label='Bad' />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;