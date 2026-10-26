import "../fonts/fonts.css";

import Companys from "./components/Companys";
import Cta from "./components/cta";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Video from "./components/Video";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Companys />
        <Testimonial />
        <Feature />
        <Testimonial />
        <Video />
        <Testimonial />
        <Pricing />
        <Faq />
        <Testimonial />
        <Cta />
      </main>
    </>
  );
};

export default App;
