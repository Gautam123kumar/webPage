import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}
