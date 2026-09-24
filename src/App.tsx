import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Preloader } from "./components/Preloader";
import { Home } from "./pages/Home";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsConditions } from "./pages/TermsConditions";

function App() {
  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
