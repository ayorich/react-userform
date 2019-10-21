import React, { Component } from 'react';
import './App.css';
import EditableTable from './table/table';
import Userform from './form/form';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dataSource: [],
  //     count: null,
  //   };
  // }
 
  // componentDidMount(){
  //   const { dataSource } = this.state;
  //   const firstData = {
  //     key: 0,
  //     firstname: 'AYODELE',
  //     lastname: 'KAYODE',
  //     birthday: '10-10-2019',
  //     age: 25,
  //     hobby: 'GOLF',
  //   };
  //   this.setState({
  //     dataSource: [...dataSource, firstData],
  //     count: 1,
  //   });

  // }

  // handleAdd = (dataSet) => {
  //   const { count, dataSource } = this.state;
  //   const { firstname, lastname, birthday, age, hobby } = dataSet;
  //   const newData = {
  //     key: count,
  //     firstname: firstname,
  //     lastname: lastname,
  //     birthday: birthday,
  //     age: age,
  //     hobby: hobby,
  //   };
  //   this.setState({
  //     dataSource: [...dataSource, newData],
  //     count: count + 1,
  //   });
  // };

  // handleDelete = key => {
  //   const dataSource = [...this.state.dataSource];
  //   this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  // };

  // handleSave = row => {
  //   const newData = [...this.state.dataSource];
  //   const index = newData.findIndex(item => row.key === item.key);
  //   const item = newData[index];
  //   newData.splice(index, 1, {
  //     ...item,
  //     ...row,
  //   });
  //   this.setState({ dataSource: newData });
  // };

  render() {
    
    return (
      <div className="App">
        <Userform  />
        <EditableTable/>

      </div>
    );
  }
}

export default App;
