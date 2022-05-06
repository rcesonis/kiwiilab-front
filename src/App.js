import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Pay from "./pages/Pay/Pay";
import Cart from "./pages/Cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success/Success";

function App() {
  const user = true;
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/signin"
          element={user ? <Navigate to="/signup" /> : <SignIn />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
