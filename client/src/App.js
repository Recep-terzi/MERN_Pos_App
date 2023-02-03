import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
