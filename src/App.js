import "./App.css";
import Home from "./components/Home/Home";
import Navs from "./components/Nav/Navs";
import { useRef } from "react";

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const exploreRef = useRef();
  const faqRef = useRef();

  return (
    <div className="App">
      <Navs refs={{ homeRef, aboutRef, exploreRef, faqRef }} />
      <Home refs={{ homeRef, aboutRef, exploreRef, faqRef }} />
    </div>
  );
}

export default App;