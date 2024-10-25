import './App.css';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';

function App() {
  const renderContentAboveFooter = () => <h2>Content Above Footer</h2>;

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Header />
      <HomePage />
      <Footer renderContentAboveFooter={renderContentAboveFooter}>
        This is your footer
      </Footer>
    </div>
  );
}

export default App;
