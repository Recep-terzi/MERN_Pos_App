import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./pages/auth/Register";
import BillPage from "./pages/BillPage";
import CartPage from "./pages/CartPage";
import CustomerPage from "./pages/CustomerPage";
import HomePage from "./pages/HomePage";
import StatisticPage from "./pages/StatisticPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/bills" element={<BillPage />}></Route>
        <Route path="/customers" element={<CustomerPage />}></Route>
        <Route path="/statistic" element={<StatisticPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
