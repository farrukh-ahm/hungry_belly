import React from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import CartMenu from './Components/Cart/CartMenu';

function App() {
  return (
    <React.Fragment>
      <Header />
      <CartMenu />
      <Menu />
    </React.Fragment>
  );
}

export default App;
