import { projectData } from "./assets/data/projectData.json";
import { useEffect, useState } from "react";
import DisplayButton from "./components/DisplayButton/DisplayButton";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./styles/main.css";

const App: React.FC = () => {
  let details = navigator.userAgent;
  let regexp = /android|iphone|kindle|ipad/i;
  let isMobileDevice = regexp.test(details);
  const colorState = window.matchMedia("(prefers-color-scheme:dark)").matches
    ? "dark"
    : "light";

  const [mode, setMode] = useState<string>(colorState);

  useEffect(() => {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [mode]);

  return (
    <div className="App">
      <DisplayButton mode={mode} setMode={setMode} />
      <Main
        projectData={projectData}
        mode={mode}
        isMobileDevice={isMobileDevice}
      />
      <Footer mode={mode} />
    </div>
  );
};

export default App;
