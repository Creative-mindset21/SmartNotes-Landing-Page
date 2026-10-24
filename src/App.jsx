import "../fonts/fonts.css";
import Companys from "./components/Companys";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Companys />
      </main>
    </>
  );
};

export default App;
