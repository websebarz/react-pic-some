import { Routes, Route } from "react-router-dom";

import Header from "./comps/Header";
import Photos from "./pags/Photos";
import Cart from "./pags/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/home" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
