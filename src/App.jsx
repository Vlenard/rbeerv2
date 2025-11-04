import { Routes, Route } from "react-router";
import Home from './views/Home';
import Login from './views/Login';
import AppData from './contexts/AppData';
import Beer from './views/Beer';
import Auth from './layouts/Auth';

const App = () => {

  return (
    <AppData>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Auth />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<Beer />} />
        </Route>
      </Routes>
    </AppData>
  );
};

export default App
