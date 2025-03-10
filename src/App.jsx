import { Features } from "./assets/Components/Features";
import { Hero } from "./assets/Components/Hero";
import { Navbar } from "./assets/Components/Navbar";
import { Pricing } from "./assets/Components/Pricing";
import { Workflow } from "./assets/Components/Workflow";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
      <Pricing />
    </>
  );
}

export default App;
