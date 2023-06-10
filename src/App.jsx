import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <div className="Card">
        <ItemListContainer greeting = {"Bienvenido a la tienda"}/>      
      </div>

      <div id="counter">
        <ItemDetailContainer />
      </div>
    </>
  );
}

export default App;
