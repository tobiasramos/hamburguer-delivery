import './App.css';
import Header from './components/header/header';
import DishCard from './components/dishes/dish-card';
import DishForm from './components/dishes/dish-form';

function App() {
  return (
    <div className="App">
      <Header />
      <DishCard />
      <DishForm />

    </div>
  );
}

export default App;
