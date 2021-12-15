import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Shop from './components/Shop';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
