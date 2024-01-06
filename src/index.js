import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const text = "Riders on the storm Into this house we're born Like a dog without a bone";
const Msg = (
<div className ='test'>
  <h2>{text}</h2>
</div>
);
const FunctionComponent = () => {
  return Msg;
};
 ReactDOM.render(
   <React.StrictMode>
   <FunctionComponent />
   </React.StrictMode>,
 document.getElementById('root')
 );