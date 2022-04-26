import './App.css';
import Error from './components/Header/Error';
import About from './components/Header/About';
import Header from './components/Header/Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (

    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
