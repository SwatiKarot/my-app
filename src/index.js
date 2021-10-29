import React from 'react';
import ReactDOM from 'react-dom';
import './Components/App/App.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <App/>,
  document.getElementById('root')
);
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "92n73tpryi");


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
