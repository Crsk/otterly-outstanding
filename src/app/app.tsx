import { RoutesCart } from '@otterly-outstanding/cart';
import { Route, Routes } from 'react-router-dom';
import { Shop } from './shop/shop';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/cart" element={<RoutesCart />} />
    </Routes>
  );
}

export default App;
