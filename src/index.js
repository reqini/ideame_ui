import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Exports all components
// export * from './stories/Button'
// export * from './stories/Cards/Hotels/HotelsCardResume/HotelsCardResume'
// export * from './stories/Gallery/Gallery'
// export * from './stories/Navs/PriceNav'
// export * from './stories/Room/RoomCard'
// export * from './stories/Tabs/Tabs'
// export * from './stories/Typography/Typography'
// export * from './stories/SimpleImage'