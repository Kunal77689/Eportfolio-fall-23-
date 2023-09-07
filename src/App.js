import { NavBar } from "./components/NavBar";
import "./App.css";
import BallsContainer from "./components/BallsContainer";
import Introduction from "./components/Introduction";
import ParallaxComponent from "./components/ParallaxComponent";
import ExperienceComponent from "./components/ExperienceComponenet";
import VerticalLine from "./components/VerticalLine";
import ParallaxComponentProjects from "./components/ParallaxComponentProjects";
function App() {
  return (
    <div className="App">
      <NavBar />
      <BallsContainer/>
      <Introduction/>
      <ParallaxComponent/>
      <VerticalLine/>
      <ExperienceComponent/>
      <ParallaxComponentProjects/>
    </div>
  );
}

export default App;
