import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Items from './components/Items/Items';
function App() {
  return (
    <div className='main-container'>
      <Header></Header>
      <Items></Items>
      <Blog></Blog>
    </div>
  );
}

export default App;
