import HeroSection from './components/HeroSection';
import ScrollTopButton from './components/ScrollTopButton';
import TermsSection from './components/TermsSection';
import GenerateSection from './components/GenerateSection';
import ContactSection from './components/ContactSection';
import AppFooter from './components/Footer';
import ProofsSection from './components/GeneradorAccounts';

function App() {
  return (
    <>
      <ScrollTopButton />
      <HeroSection />
      <main>
        <TermsSection />
        <GenerateSection />
        <ProofsSection />
        <ContactSection />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
