import { Routes, Route } from "react-router-dom";

import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Notfound from "./pages/notfound/Notfound";

const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
