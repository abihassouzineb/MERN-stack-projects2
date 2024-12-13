import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Auth from './pages/Auth';
import CreateRecipe from './pages/CreateRecipe';
import SavedRecipes from './pages/SavedRecipes';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/create-recipe' element={<CreateRecipe />} />
          <Route path='/saved-recipes' element={<SavedRecipes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
