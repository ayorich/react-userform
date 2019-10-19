import React, { Component } from 'react';
import './App.css';
import EditableTable from './table/table';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <EditableTable/>
      </div>
    );
  }
}

export default App;
