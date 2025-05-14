import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import  AddJob  from "./pages/addjob";
import Home from "./pages/home";
import LogIn from "./pages/login";	
import SignUp from "./pages/signup";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="addjob" element={<AddJob />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
