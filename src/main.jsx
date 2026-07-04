import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { ROUTES, useHash } from './router.jsx';

function App() {
  const hash = useHash();
  React.useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [hash]);

  const Page = ROUTES[hash] || HomePage;
  return (
    <div id="app">
      <Navbar currentHash={hash} />
      <main><Page /></main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
