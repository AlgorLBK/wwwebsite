import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react"; // ✅ Add this

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Capstone, Socials } from "./components";

const App = () => {

  const CleanURL = () => {
    useEffect(() => {
      const url = new URL(window.location.href);
      if (url.search) {
        window.history.replaceState({}, document.title, url.pathname);
      }
    }, []);
    return null;
  }

  return (
    <BrowserRouter>
      <CleanURL />
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Capstone />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Socials />
      </div>
    </BrowserRouter>
  );
}

export default App;
