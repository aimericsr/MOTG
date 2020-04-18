import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Welcome(props) {
    return <h1>Hello,je suis dans l'autre branche {props.name}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Sara" />
        <Welcome name="Sara" />
        <Welcome name="Sara" />
      </div>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );