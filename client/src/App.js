import About from "./components/About";
import Features from "./components/Features";
import { Review } from "./components/Review";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/contact";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Section1 from "./components/section1";

import { useRef } from "react";

function App() {
  const section2 = useRef(null);
  const section3 = useRef(null);
  const section4 = useRef(null);
  const section5 = useRef(null);
  const contact = useRef(null);

  return (
    <div className="app">
      <Header sec2={section2} sec3={section3} sec4={section4} sec5={section5} />

      <Services ref={section2} />
      <Features />
      <About ref={section3} />
      <Work ref={section4} />
      <Contact ref={section5} />
      <Review />
      <Footer sec2={section2} sec3={section3} sec5={section5} />
    </div>
  );
}

export default App;
