import "./App.css";
import Header from "./components/Header";
import PlayButton from "./components/PlayButton";
import Footer from "./components/Footer";
import Section from "./components/Section"; // Use the correct file casing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Faq from "./components/Faq"; // Import the Faq component

const App: React.FC = () => {
  return (
    <Router>
      {/* Wrap the whole content in a div to apply the blur */}
      <div className={`app-content`}>
        <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <PlayButton />
                <Section /> {/* Display FAQ on the main page */}
              </>
            }
          />
          {/* Add the FAQ route */}
          <Route path="/faq" element={<Faq />} />
          {/* Add the Guide route if needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
