import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider  } from '@apollo/client';
import { CLIENT, TOKEN } from './apollo'
import ErrorPage from './components/ErrorPage/ErrorPage'


if(TOKEN === undefined) {
  ReactDOM.render(
  <React.StrictMode>
      <ErrorPage />
  </React.StrictMode>
  ,
document.getElementById('root')
  )
} else {
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={CLIENT}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
