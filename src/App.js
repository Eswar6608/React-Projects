import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import Cart from "./Router/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
