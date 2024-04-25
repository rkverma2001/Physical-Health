import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HealthInfo from "./components/HealthInfo";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={setSearchTerm} />
      <HealthInfo searchTerm={searchTerm} />
      <Footer />
    </div>
  );
};

export default App;
