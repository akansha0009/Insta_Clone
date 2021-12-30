import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import {Container} from './components/styles/Container.styled'

function App() {
  return (
    <div className="App" style={{ background: '#FAFAFA'}}>
      <Header />
      <br />
      <Container>
        <Card />
      </Container>
    </div>
  );
}

export default App;
