
import './App.css';
import Navbar from './components/navbar/navbar';
import Middlebox from './components/middlebox/Middlebox';
import Bottombox from './components/bottombox/Bottombox';

function App() {
  return (
    <div id="maincontainer" >
     <Navbar/>
     <Middlebox/>
     <Bottombox/>
    </div>
  );
}

export default App;
