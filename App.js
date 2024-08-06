import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage';
import SecondPage from './pages/secondpage';
import ThirdPage from './pages/thirdpage';
import ThirdPageYes from './pages/thirdpage-yes';
import YesFourthPage from './pages/yes-fourthpage';
import YesFifthPage from './pages/yes-fifthpage';
import YesFifthPageNo from './pages/yes-fifthpage-no';
import YesFifthPageYes from './pages/yes-fifthpage-yes';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/third-yes" element={<ThirdPageYes />} />
          <Route path="/yes-fourth" element={<YesFourthPage />} />
          <Route path="/yes-fifth" element={<YesFifthPage />} />
          <Route path="/yes-fifth-no" element={<YesFifthPageNo />} />
          <Route path="/yes-fifth-yes" element={<YesFifthPageYes />} />
        </Routes>
    </Router>
  );
}

export default App;

