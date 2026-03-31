import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Footer from "./components/Footer";
import { ResetPasswordPage } from "./features/auth/pages/ResetPasswordPage";
import SignUp from "./features/auth/pages/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>My name is Zackypee</h1>
      <h1>JMS</h1>
      <p>I love my work</p>
      <p>testing</p>
      <p>Testing testing 11</p>
    </div>
  );
}

export default App;
