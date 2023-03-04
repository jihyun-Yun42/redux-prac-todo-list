import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detailpage from '../component/Detailpage';
// import App from '../App';
import Home from '../Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detailpage/:id" element={<Detailpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
