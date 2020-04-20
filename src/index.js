import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
// import Modal from './UI_element/Modal/Modal';
// import Admin from './Admin/admin';
// import NewProduct from './Admin/NewProdcut/NewProduct'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Reducer from './Redux/Reducer/Reducer';
import AUI from './UI_element/AUI/AUI';

const store =new createStore(Reducer)

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <AUI>
   <App />
   </AUI>
   {/* <Route path="/" exact component={App}></Route>

   <Route path="/FMadmin/login" component={Admin}></Route>
   <Route path="/FMadmin/NewProduct" component={NewProduct}></Route>
    */}
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
