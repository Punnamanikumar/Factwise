import "./App.css";
import AllComponents from "./Components/AllComponents";
import { memo } from "react";

function App() {
  return (
    <div className="App">
      <AllComponents />
    </div>
  );
}

export default memo(App);
