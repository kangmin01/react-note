import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "미니";
  const list = ["딸기", "바나나", "메론"];
  return (
    <>
      <h1>{`Hello! ${name}`}</h1>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
