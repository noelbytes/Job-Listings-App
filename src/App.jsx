{/* NOTE: In JSX, you can just return a single parent JSX element */}
const App = () => {
  const name = 'Allan';
  const x = 10;
  const y = 20;
  const names = ['Brad', 'Mary', 'Joe', 'Sarah'];
  const loggedIn = true;
  const styles = {
    color: 'red',
    fontSize: '55px'
  }

  return (
    <>
    <div className='text-5xl'>App</div>
    {/* <p style={{ color: 'red', fontSize: '24px '}}> Hello { name }</p> */}
    {/* Another way to apply styles */}
    <p style={styles}>Hello {name}</p>
    <p>The sum of {x} and {y} is {x + y}</p>
    <ul>
      { names.map((name, index) => (
        <li key={ index }>{name}</li> // Always use a unique key prop when rendering lists in React
      ))}
    </ul>
    { loggedIn && <h1>Hello Member</h1> }
    </>
  )
}

export default App;