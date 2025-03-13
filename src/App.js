import "./index.css";
import { useState } from "react";
import Header from "./Header.js";
import UserInput from "./UserInput.js";
import Result from "./Result";
import { calculateInvestmentResults } from "./util/investment";

const initialValue = [
  { key: "initialInvestment", value: 200, text: "Initial Investment" },
  { key: "annualInvestment", value: 500, text: "Annual Investment" },
  { key: "expectedReturn", value: 5, text: "Expected Returns" },
  { key: "duration", value: 5, text: "Duration (Years)" },
];

function App() {
  const handleChange = (key, value) => {
    setFormInfo((prevFormInfo) =>
      prevFormInfo.map((item) =>
        item.key === key ? { ...item, value: Number(value) } : item
      )
    );
  };
  const [formInfo, setFormInfo] = useState(initialValue);

  return (
    <div>
      <Header />
      <UserInput formInfo={formInfo} handleChange={handleChange} />
      <Result formInfo={formInfo} />
    </div>
  );
}

export default App;
