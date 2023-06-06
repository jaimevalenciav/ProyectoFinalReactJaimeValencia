import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Counter from './components/Counter/Counter.jsx';

function App() {
  return (
    <>
      <NavBar />
      <div clasName="Card">
        <ItemListContainer greeting = {"Bienvenido a la tienda"}/>      
      </div>

      <div id="counter">
        <Counter inicial={1} stock={5} onAdd={(cantidad) => console.log('cantidad agregada ', cantidad)}/>
      </div>
    </>
  );
}

export default App;
