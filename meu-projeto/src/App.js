import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  const nome = "Miguel";
 
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Thiago" />
      <SayMyName nome="Gael" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Thiago"
        idade="28"
        profissao="Programador"
        foto='https://via.placeholder.com/150'
      />
      <List />
    </div>
  );

}

export default App;
