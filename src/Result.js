import { useEffect } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

export default function Result({ formInfo }) {
  // Convert formInfo into an object for calculation
  const investmentData = formInfo.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  // Calculate annual data based on the investment data
  const annualData = calculateInvestmentResults(investmentData) || [];
  console.log(annualData);
  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>annualInvestment</th>
            <th>Total Interest</th>
            <th>valueEndOfYear</th>
            <th>year</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((item) => (
            <tr key={item.year}>
              <td>{item.annualInvestment}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
