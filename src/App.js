import './App.css'
import Header from "./Header"
import Objective from "./Objective";
import About from "./About"

export default function App() {
  return (
    <div>
      <Header />
      <Objective name="Paul"/>
      <About />
    </div>
  );
}
