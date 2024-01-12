import { NavBar } from "./components/NavBar";
import "./App.css";
import BallsContainer from "./components/BallsContainer";
import Introduction from "./components/Introduction";
import ParallaxComponent from "./components/ParallaxComponent";
import ExperienceComponent from "./components/ExperienceComponenet";
import ParallaxComponentProjects from "./components/ParallaxComponentProjects";
import ImageComponent from "./components/ImageComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BallsContainer />
      <Introduction />
      <ParallaxComponent />
      <ExperienceComponent />
      <ParallaxComponentProjects />
      <ImageComponent />
      <Footer />
    </div>
  );
}

export default App;
