import { Routes, Route } from "react-router-dom";

import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
