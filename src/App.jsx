import "../fonts/fonts.css";
import Companys from "./components/Companys";
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
      </main>
    </>
  );
};

export default App;
