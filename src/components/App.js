// create your App component here
import { useState, useEffect } from "react";
const App = () => {
  const [dog, setDog] = useState(null);
  const [isPending, setIsPending] = useState(true);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDog(data);
        setIsPending(false);
      });
  }, []);
  return (
    <div className="main">
      {isPending && <p>Loading...</p>}
      {dog && <img src={dog} alt="A Random Dog" />}
    </div>
  );
};

export default App;
