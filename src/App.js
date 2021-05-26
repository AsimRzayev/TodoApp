
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App container">
      <TodoInput/>
      <TodoList/>
    </div>
  );
}

export default App;
