import React, {useState} from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import CartMenu from './Components/Cart/CartMenu';
import CartProvider from './store/ContextProvider';

function App() {

  const [modalDisplay, setModalDisplay] = useState(false);

  const modalHandler = () => {
    modalDisplay?setModalDisplay(false):setModalDisplay(true)
  }

  return (
    <CartProvider>
      {modalDisplay && <CartMenu onClose={modalHandler}/>}
      <Header onOpen={modalHandler}/>

      <Menu />
    </CartProvider>
  );
}

export default App;
