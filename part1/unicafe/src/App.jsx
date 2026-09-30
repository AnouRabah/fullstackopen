import { useState } from 'react'

const Button = ({ label, onClick }) => <button onClick={onClick}>{label}</button>

const StatisticLine = ({ label, value }) => (
  <tr>
    <td>{label}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const allFeedback = good + neutral + bad
  const average = (good * 1 + bad * -1) / allFeedback
  const positivePercentage = (good / allFeedback) * 100

  return (
    <table>
      <tbody>
        <StatisticLine label="good" value={good} />
        <StatisticLine label="neutral" value={neutral} />
        <StatisticLine label="bad" value={bad} />
        <StatisticLine label="all" value={allFeedback} />
        <StatisticLine label="average" value={average.toFixed(1)} />
        <StatisticLine
          label="positive"
          value={`${positivePercentage.toFixed(0)} %`}
        />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const allFeedback = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button label="good" onClick={() => setGood(good + 1)} />
        <Button label="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button label="bad" onClick={() => setBad(bad + 1)} />
      </div>
      {allFeedback > 0 && <Statistics good={good} neutral={neutral} bad={bad} />}
    </div>
  )
}

export default App
