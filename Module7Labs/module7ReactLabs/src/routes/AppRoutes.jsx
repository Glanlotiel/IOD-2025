import BitcoinPage from "../pages/BitcoinPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import { Routes, Route } from "react-router-dom";

export default function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<HomePage {...props} />} />
      <Route path="/login" element={<LoginPage {...props} />} />
      <Route path="/bitcoinrate" element={<BitcoinPage {...props} />} />
    </Routes>
  );
}
