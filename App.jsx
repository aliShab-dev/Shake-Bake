
import './App.css';
import Meals from "./component/meals"
import Favorties from "./component/Favorties"
import Search from "./component/Search"
import Modal from "./component/Modal"
import { useGlobalContext } from './context';


function App() {
  const {showModal, favorites} = useGlobalContext()

  return (
  <main className='total'>
    <Search/>
    {favorites.length >0 && <Favorties/>}
    <Meals/>
    {showModal && <Modal/>}
  </main>
  );
}

export default App;
