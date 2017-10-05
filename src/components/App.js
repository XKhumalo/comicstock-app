import React, { Component } from 'react';
import '../styles/App.css';
import SuppliersPage from './suppliers/SuppliersPage'
import IssuesPage from './issues/IssuesPage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <IssuesPage />
      </div>
    );
  }
}

export default App;
