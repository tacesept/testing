

function App() { 
  console.log(import.meta.env)
  return (
    <main>
      <h1>{import.meta.env.VITE_API || "loading..."}</h1>
    </main>
  )
}

export default App
