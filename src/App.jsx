import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("loading…");

  useEffect(() => {
    fetch("/.netlify/functions/getMessage")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(err);
        setMessage("Error fetching message");
      });
  }, []);

  return (
    <main className="p-4">
      <h1>{message}</h1>
    </main>
  );
}

export default App;
