import Circle from "./Components/Circle";
import ContactMe from "./Components/ContactMe";
import Header from "./Components/Header";

import Intro from "./Components/Intro";
import Photo from "./Components/Photo";
import Rings from "./Components/Rings";
import Skillbox from "./Components/Skillbox";

import "./responsive.css";
function App() {
  return (
    <div
      className="App m-auto dark:bg-stone-900 dark:text-slate-200"
      style={{ width: "100%", maxWidth: "1920px" }}>
      <Rings />
      <Circle />
      <div
        className="container m-auto font-grotesk min-h-screen relative px-14"
        style={{ maxWidth: "1440px" }}>
        <Photo />
        <Header />
        <main>
          <Intro />
          <ContactMe />
          <section className="skills mt-60 pt-16 flex gap-y-14 flex-wrap gap-9">
            <h1
              className="w-full border-b-2 border-green-600 pb-10"
              style={{ fontSize: "8vw" }}>
              Skills
            </h1>
            <Skillbox skill="Node.js / Express" years="0.5" />
            <Skillbox skill="MongoDB / Mongoose" years="0.5" />
            <Skillbox skill="React" years="1" />
            <Skillbox skill="JavaScript" years="1" />
            <Skillbox skill="TypeScript" years="0.5" />
            <Skillbox skill="C" years="0.5" />
            <Skillbox skill="Tailwind CSS" years="0.5" />
            <Skillbox skill="SCSS" years="1" />
            <Skillbox skill="Bootstrap" years="1" />
            <Skillbox skill="CSS" years="1" />
            <Skillbox skill="HTML" years="1" />
            <Skillbox skill="GIT" years="1" />
          </section>
          <section className="projects mt-44">
            <h1>Projects</h1>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
