import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import { FirstPage } from "./pages/firstPage/FirstPage";
import { HomePage } from "./pages/homePage/HomePage";
import { AboutPage } from "./pages/about/AboutPage";

function App() {
  return (
    <main class="bg-gray-50 min-h-screen w-full flex flex-row justify-between relative overflow-auto">
      <Routes>
        <Route path="/first" component={FirstPage} />
        <Route path="/" component={HomePage} />
        <Route path="/about" element={AboutPage} />
      </Routes>
    </main>
  );
}

export default App;
