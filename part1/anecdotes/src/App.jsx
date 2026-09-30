import { useReducer, useState } from 'react'

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
]

const initialState = {
  selected: 0,
  votes: new Array(anecdotes.length).fill(0),
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT': {
      const upperBound = anecdotes.length
      return { ...state, selected: Math.floor(Math.random() * upperBound) }
    }
    case 'VOTE': {
      const copy = [...state.votes]
      copy[state.selected] += 1
      return { ...state, votes: copy }
    }
    default:
      return state
  }
}

const mostVoted = (votes) => {
  let maxIndex = 0
  for (let i = 1; i < votes.length; i++) {
    if (votes[i] > votes[maxIndex]) {
      maxIndex = i
    }
  }
  return maxIndex
}

const Display = ({ anecdote, votes }) => (
  <div>
    <h2>Anecdote of the day</h2>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
  </div>
)

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [showMostVoted, setShowMostVoted] = useState(false)

  const displayed = showMostVoted ? mostVoted(state.votes) : state.selected

  return (
    <div>
      <Display anecdote={anecdotes[displayed]} votes={state.votes[displayed]} />
      <button onClick={() => dispatch({ type: 'VOTE' })}>vote</button>
      <button onClick={() => dispatch({ type: 'NEXT' })}>next anecdote</button>
      <button onClick={() => setShowMostVoted(!showMostVoted)}>
        {showMostVoted ? 'show current' : 'show most voted'}
      </button>
    </div>
  )
}

export default App
