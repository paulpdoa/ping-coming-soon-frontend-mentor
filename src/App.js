import Footer from "./components/Footer";
import Header from "./components/Header";
import Illustration from "./components/Illustration";
import Input from "./components/Input";

function App() {

  return (
    <div className="h-screen">
      <div className="h-full container mx-auto flex flex-col items-center justify-center">
        <Header />
        <Input />
        <Illustration />
        <Footer />
      </div>
    </div>
  );
}

export default App;
