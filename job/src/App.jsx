import { Route, Routes } from "react-router-dom";

import Navbar from "./components/ui/Navbar";
import AddJob from "./pages/AddJob";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="add-job" element={<AddJob />} />
        <Route path="log-in" element={<LogIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
