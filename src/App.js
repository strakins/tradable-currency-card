import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './compnent/Header';
import Cards from './compnent/Cards';

function App() {
  return (
    <div className='bg-primary text-center p-5'>
      < Header />
      < Cards />
    </div>
  );
}

export default App;
