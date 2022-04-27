import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./pages/Homepage/Homepage";
import Products from "./components/Products/Products";
import SignUp from "./pages/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/signin" element={<Login />} /> */}
      </Routes>
      <Homepage />
    </div>
  );
}

export default App;
