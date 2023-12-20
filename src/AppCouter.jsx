import { useState } from "react";
import Counter from "./components/Counter";

export default function AppCouter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>
        Total Count : {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      <div>
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </>
  );
}
