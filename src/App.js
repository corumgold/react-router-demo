import Products from "./components/Products";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
//📣 Allows us to create individual routes
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index path={"/"} element={<Home />} />
        <Route path={"/products/:id"} element={<Products />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
