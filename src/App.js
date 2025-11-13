import './App.css'
import Header from "./Header"
import Objective from "./Objective";
import About from "./About"
import Projects from "./Projects"

export default function App() {
  return (
    <div>
      <Header />
      <Objective name="Paul"/>
      <About />
      <Projects />
    </div>
  );
}
