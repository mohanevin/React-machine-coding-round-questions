import { useState } from "react";
import "./styles.css";

export default function App() {
  const [percent, setpercent] = useState(10);
  const handleIncrease = () => {
    if (percent + 10 > 100) return;
    setpercent(percent + 10);
  };
  const handleDecrease = () => {
    if (percent - 10 < 0) return;
    setpercent(percent - 10);
  };
  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <div className="outer-Container">
        <div className="inner-Container" style={{ width: `${percent}%` }}>
          {percent}%
        </div>
      </div>
    </div>
  );
}
