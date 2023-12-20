import "../App.css";
import { useState, useEffect } from "react";

export default function Counter({ total, onClick }) {
  const [num, setNum] = useState(0);
  return (
    <div className="counter">
      <p>
        {num}/<span>{total}</span>
      </p>
      <button
        onClick={() => {
          setNum((prev) => prev + 1);
          onClick();
        }}
      >
        Add
      </button>
    </div>
  );
}
