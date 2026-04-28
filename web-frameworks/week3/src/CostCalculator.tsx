import { useState } from "react";

type CostCalculatorProps = {
  priceOfSingleVMPerHour: number;
};

function CostCalculator({ priceOfSingleVMPerHour }: CostCalculatorProps) {
  const [vmCount, setVmCount] = useState<string>("");

  const numberOfVMs = Number(vmCount) || 0;

  const costPerHour = numberOfVMs * priceOfSingleVMPerHour;
  const costPerDay = costPerHour * 24;
  const costPerMonth = costPerDay * 30;
  const costPerYear = costPerHour * 8760;

  return (
    <div>
      <h1>VM Cost Calculator</h1>
      <label htmlFor="vmNumber">Number of VMs</label>
      <input
        type="text"
        id="vmNumber"
        placeholder="Number of VMs"
        value={vmCount}
        onChange={(e) => setVmCount(e.target.value)}
      />
      <div>
        <p>Cost per hour: {costPerHour}</p>
        <p>Cost per day: {costPerDay}</p>
        <p>Cost per month: {costPerMonth}</p>
        <p>Cost per year: {costPerYear}</p>
      </div>
    </div>
  );
}

export default CostCalculator;

