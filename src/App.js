import './App.css';
import About from './companent/about/About';
import Header from './companent/header/Header';
import Home from './companent/home/Home';
import Project from './companent/project/Project';
import Qualification from './companent/qualification/Qualification';
import Skills from './companent/skills/Skills';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Project />
      </main>
    </>
  );
}

export default App;
