const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ course }) => (
  <div>
    {course.parts.map((part) => (
      <Part key={part.name} part={part} />
    ))}
  </div>
)

const Total = ({ course }) => {
  const count = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <strong>Number of exercises {count}</strong>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
