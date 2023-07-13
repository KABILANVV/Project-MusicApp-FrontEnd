import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Login from './User/Login';
// import Forms from './User/form';
// import Home from './Home/Home';
// import Sidebar from './Home/SideBar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
// import SearchBar from './Components/SearchBar';
import { Provider } from 'react-redux';
import store from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  {/* <Sidebar/> */}
      <Provider store={store}>
          <BrowserRouter>
            <Routing/>
          </BrowserRouter>
      </Provider> 
  </React.StrictMode>
);

/* <Provider store={store}>
    <div>
      <SearchBar />
      // {/* Other components }
    </div>
</Provider> */



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
