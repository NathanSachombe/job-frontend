import { Route, Routes } from "react-router";

import { Navbar } from "./components/ui/Navbar";
import { AddJob } from "./pages/AddJob";
import { LoginIn } from "./pages/LoginIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="add-job" element={<AddJob />} />
        <Route path="login-in" element={<LoginIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
