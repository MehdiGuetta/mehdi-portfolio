import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Services from "./components/NavItems/Services";
import Resume from "./components/NavItems/Resume";
import Work from "./components/NavItems/Work";
import Contact from "./components/NavItems/Contact";
import Home from "./components/NavItems/Home";
import Header from "./components/Header";
import { AnimatePresence, motion } from "framer-motion";
import StairTransition from "./components/StairTransition";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
      />
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <StairTransition />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
