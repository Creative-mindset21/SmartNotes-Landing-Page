import "../fonts/fonts.css";
import Companys from "./components/Companys";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";

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
      </main>
    </>
  );
};

export default App;
