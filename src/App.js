import './App.css';
import Header from './components/Header';
import MyComponent from './Mapa'
import ComplexGrid from './components/Perdidos'



function App() {
  return ( 
    <div className='container-Principal' >
     <div>
    <Header />
    </div>
    <div className='mapa'>
    <MyComponent/>
    </div>
    <div>
      <ComplexGrid/>
    </div>
    </div>
  );
 
}

export default App;

