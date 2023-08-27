import { Routes, Route } from "react-router-dom";

import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Notfound from "./pages/notfound/Notfound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
