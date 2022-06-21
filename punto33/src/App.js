import './App.css';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
/* import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer'; */
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
{/*       <ItemListContainer titulo="Proyecto E-Commerce" text="de comidas rapida" name="Miranda Leonardo"/>
 */}      <ItemDetailContainer/>
    </div>
  );
}

export default App;
