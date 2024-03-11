import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
// import SlideComponent from './Sk_engineering/slide';
import ImageSlide from './Sk_engineering/slide';
import App from './Sk_engineering/nav';
import Approuter from './Sk_engineering/router';
// import App from './ad/nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <NavScrollExample/> */}
    {/* <CollapsibleExample/> */}
    {/* <SlideComponent/> */}
    {/* <ImageSlide/> */}
    <Approuter/>
{/* <App/>   */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
