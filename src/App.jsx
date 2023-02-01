import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <main id="home">
                <Home />
              </main>
            }
          />
          <Route
            path="/about"
            element={
              <main id="about">
                <About />
              </main>
            }
          />
          <Route
            path="/projects"
            element={
              <main id="projects">
                <Projects />
              </main>
            }
          />
          <Route
            path="/project/:id"
            element={
              <main id="project">
                <Project />
              </main>
            }
          />
          <Route
            path="/contact"
            element={
              <main id="contact">
                <Contact />
              </main>
            }
          />
          <Route
            path="*"
            element={
              <main id="pagenotfound">
                <PageNotFound />
              </main>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
