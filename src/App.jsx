import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LogoStrip from "./components/LogoStrip";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <main
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/desert.jpg')" }}
    >
      <Navbar />
      <Header />
      <Pricing />
      <LogoStrip />
    </main>
  );
};

export default App;
