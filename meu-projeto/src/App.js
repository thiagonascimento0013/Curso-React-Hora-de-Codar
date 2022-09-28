import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Miguel";
 
  return (
    <div className="App">
      <SayMyName nome="Thiago" />
      <SayMyName nome="Gael" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Thiago"
        idade="28"
        profissao="Programador"
        foto='https://via.placeholder.com/150'
      />
    </div>
  );

}

export default App;
