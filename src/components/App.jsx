import { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  function fetchDog() {
    setLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div>
      <h1>Random Dog Images</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="random dog" />
      )}
      <button onClick={fetchDog}>New Dog</button>
    </div>
  );
}

export default App;