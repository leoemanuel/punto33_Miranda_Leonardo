import './App.css';
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer titulo="Proyecto E-Commerce" text="de comidas rapida" name="Miranda Leonardo"/>
    </div>
  );
}

export default App;
