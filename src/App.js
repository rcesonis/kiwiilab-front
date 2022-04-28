import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Homepage from "./pages/Homepage/Homepage";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Pay from "./pages/Pay/Pay";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </div>
  );
}

export default App;
