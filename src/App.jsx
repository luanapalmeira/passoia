import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Lancamentos from "./components/Lancamentos";
import Looks from "./components/Looks";
import Novidades from "./components/Novidades";
import "./global.scss";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Looks />
      <Lancamentos />
      <Novidades />
      <Footer />
    </>
  );
}

export default App;
