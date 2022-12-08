import Circle from "./Components/Circle";
import ContactMe from "./Components/ContactMe";
import Header from "./Components/Header";

import Intro from "./Components/Intro";
import Photo from "./Components/Photo";
import Rings from "./Components/Rings";

import './responsive.css'
function App() {
  return (
    <div
      className="App m-auto dark:bg-stone-900 dark:text-slate-200"
      style={{ width: "100%", maxWidth: "1920px" }}>
      <Rings />
      <Circle />
      <div className="container max-w-7xl m-auto font-grotesk min-h-screen relative px-12">
        <Header />
        <main>
          <Intro />
          <ContactMe />
          <Photo />
        </main>
      </div>
    </div>
  );
}

export default App;
