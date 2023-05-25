import './App.css';
import DishCard from './components/dishes/dish-card';
import DishForm from './components/dishes/dish-form';
import Header from './components/header/header';

function App() {
  return (
    <div className="App">
      <DishCard />
      <DishForm />
      <Header />
    </div>
  );
}

export default App;
