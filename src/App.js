import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Results from "./components/Results/Results";
import AppProvider from './context/Appcontext';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Section />
        <Results />
      </AppProvider>

    </div>
  );
}

export default App;
