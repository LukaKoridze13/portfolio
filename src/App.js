import Circle from "./Components/Circle";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import Intro from "./Components/Intro";
import Photo from "./Components/Photo";
import ProjectBox from "./Components/ProjectBox";
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
              className="w-full border-b-2 border-green-600 pb-6"
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
          <section className="projects mt-36 flex flex-wrap gap-y-16 justify-around">
            <h1
              className="w-full border-b-2 border-green-600 pb-6 mb-8"
              style={{ fontSize: "8vw" }}>
              Projects
            </h1>
            <ProjectBox
              image="https://i.ibb.co/TKtDH8J/Capture.png"
              name="Live Chat"
              used={["Node.js", "Express", "MongoDB", "React"]}
              website="https://lukakoridze13.github.io/chat-frontend/"
              code="https://github.com/LukaKoridze13/chat-frontend"
              back="https://github.com/LukaKoridze13/chat-backend"
            />
            <ProjectBox
              image="https://github.com/LukaKoridze13/entertainment-reactapp/blob/main/src/assets/screenshot.PNG?raw=true"
              name="Movies Entertainment Web App"
              used={["React", "SCSS", "API"]}
              website="https://lukakoridze13.github.io/entertainment-reactapp"
              code="https://github.com/LukaKoridze13/entertainment-reactapp"
            />
            <ProjectBox
              image="https://i.ibb.co/LRQHqPG/Capture.png"
              name="Tic Tac Toe"
              used={["React"]}
              website="https://lukakoridze13.github.io/TicTacToe/"
              code="https://github.com/LukaKoridze13/TicTacToe"
            />
            <ProjectBox
              image="https://github.com/LukaKoridze13/planets-facts/raw/main/src/assets/preview.jpg"
              name="Planets Facts"
              used={["React", "React Router"]}
              website="https://lukakoridze13.github.io/planets-facts/"
              code="https://github.com/LukaKoridze13/planets-facts"
            />
            <ProjectBox
              image="https://i.ibb.co/58pmBFp/lukakoridze13-github-io-1920x-FULLdesktop-c2fbae.png"
              name="Lemondo"
              used={["HTML", "CSS", "JavaScript"]}
              website="https://lukakoridze13.github.io/Lemondo/"
              code="https://github.com/LukaKoridze13/Lemondo"
            />
            <ProjectBox
              image="https://github.com/LukaKoridze13/github-users-search/raw/main/src/Images/screenshot.png"
              name="GitHub Users Search"
              used={["React", "SCSS", "API"]}
              website="https://lukakoridze13.github.io/github-users-search/"
              code="https://github.com/LukaKoridze13/github-users-search"
            />
            <ProjectBox
              image="https://github.com/LukaKoridze13/todo-app/raw/main/src/Images/screenshot.JPG"
              name="todo"
              used={["React", "SCSS"]}
              website="https://lukakoridze13.github.io/todo-app/"
              code="https://github.com/LukaKoridze13/todo-app"
            />
            <ProjectBox
              image="https://i.ibb.co/VQhPNBB/lukakoridze13-github-io-1920x-FULLdesktop-e25227.png"
              name="Tip Calculator"
              used={["HTML", "CSS", "JavaScript"]}
              website="https://lukakoridze13.github.io/TipCalculator/"
              code="https://github.com/LukaKoridze13/TipCalculator"
            />
            <ProjectBox
              image="https://i.ibb.co/CBsNPHC/lukakoridze13-github-io-1920x768desktop-34ccf6.png"
              name="Interactive Pricing"
              used={["HTML", "CSS", "JavaScript"]}
              website="https://lukakoridze13.github.io/InteractivePricing/"
              code="https://github.com/LukaKoridze13/InteractivePricing"
            />
            <ProjectBox
              image="https://i.ibb.co/n71PTpf/lukakoridze13-github-io-1920x1080desktop-3cef15.png"
              name="Restaurant"
              used={["React", "Bootstrap", "React Router", "API"]}
              website="https://lukakoridze13.github.io/Restaurant-ReactApp/"
              code="https://github.com/LukaKoridze13/Restaurant-ReactApp"
            />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
