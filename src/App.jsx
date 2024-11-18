import Blog from "./component/pages/Blog";
import Boom from "./component/pages/Boom";
import Hero from "./component/pages/Hero";
import Navbar from "./component/pages/Navbar";
import Presentation from "./component/pages/Presentation";
import Slider from "./component/pages/Slider";
import Time from "./component/pages/Time";
import Video from "./component/pages/Video";
import Fotter from "./component/pages/Fotter";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Presentation />
      <Slider />
      <Video />
      <Time />
      <Boom />
      <Blog  />
      <Fotter />
    </>
  );
};

export default App;
