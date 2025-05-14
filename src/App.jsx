import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import  AddJob  from "./Pages/addjob";
import Home from "./Pages/home";
import LogIn from "./Pages/login";	
import SignUp from "./Pages/signup";

function App() {
  return (
    <>
      <NavBar />

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
