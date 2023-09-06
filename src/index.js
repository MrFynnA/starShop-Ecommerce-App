import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './components/store/redStore';
import CartProvider from './components/CartContext/CartProvider';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><CartProvider><App/> </CartProvider></Provider> );