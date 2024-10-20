import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [inputs, setInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const validDuration = inputs.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setInputs((prevInputs) => {
      console.log(newValue);
      return {
        ...prevInputs,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInputs={inputs} onChange={handleChange} />
      {validDuration && <Results userInputs={inputs} />}
      {!validDuration && <p>please input valid duration</p>}
    </>
  );
}

export default App;
