// // import React, { useState } from 'react';
// import React from 'react';
// import './App.css';
// import EditableTable from './table/table';
// import Userform from './form/form';
// import { submit } from '../actions';



// const App = () => {


//     return (
//         <div className="App">
//             <Userform submit={submit} />
//             <EditableTable />

//         </div>
//     );

// };

// export default App;

// import React from 'react';
// import { connect } from 'react-redux';
// // import { submit } from '../../actions';
// import { Table, Input, Button, Popconfirm, Form } from 'antd';
// // import Userform from './../form/form.js';
// import './table.css';

// const EditableContext = React.createContext();

// const EditableRow = ({ form, index, ...props }) => (
//     <EditableContext.Provider value={form}>
//         <tr {...props} />
//     </EditableContext.Provider>
// );

// const EditableFormRow = Form.create()(EditableRow);

// class EditableCell extends React.Component {
//     state = {
//         editing: false,
//     };

//     toggleEdit = () => {
//         const editing = !this.state.editing;
//         this.setState({ editing }, () => {
//             if (editing) {
//                 this.input.focus();
//             }
//         });
//     };

//     save = e => {
//         const { record, handleSave } = this.props;
//         this.form.validateFields((error, values) => {
//             if (error && error[e.currentTarget.id]) {
//                 return;
//             }
//             this.toggleEdit();
//             handleSave({ ...record, ...values });
//         });
//     };

//     renderCell = form => {
//         this.form = form;
//         const { children, dataIndex, record, title } = this.props;
//         const { editing } = this.state;
//         return editing ? (
//             <Form.Item style={{ margin: 0 }}>
//                 {form.getFieldDecorator(dataIndex, {
//                     rules: [
//                         {
//                             required: true,
//                             message: `${title} is required.`,
//                         },
//                     ],
//                     initialValue: record[dataIndex],
//                 })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
//             </Form.Item>
//         ) : (
//                 <div
//                     className="editable-cell-value-wrap"
//                     style={{ paddingRight: 24 }}
//                     onClick={this.toggleEdit}
//                 >
//                     {children}
//                 </div>
//             );
//     };

//     render() {
//         const {
//             editable,
//             dataIndex,
//             title,
//             record,
//             index,
//             handleSave,
//             children,
//             ...restProps
//         } = this.props;
//         return (
//             <td {...restProps}>
//                 {editable ? (
//                     <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
//                 ) : (
//                         children
//                     )}
//             </td>
//         );
//     }
// }

// const EditableTable = (props) => {

//     const columns = [
//         {
//             title: 'FirstName',
//             dataIndex: 'firstname',
//             width: '20%',
//             editable: true,
//         },
//         {
//             title: 'LastName',
//             dataIndex: 'lastname',
//             width: '20%',
//             editable: true,
//         },
//         {
//             title: 'Birthday',
//             dataIndex: 'birthday',
//             editable: true,
//         },
//         {
//             title: 'age',
//             dataIndex: 'age',
//             editable: true,
//         },
//         {
//             title: 'Hobby',
//             dataIndex: 'hobby',
//             editable: true,
//         },
//         {
//             title: 'operation',
//             dataIndex: 'operation',
//             render: (text, record) =>
//                 props.userDetails.length >= 1 ? (
//                     <Popconfirm title="Sure to delete?" onConfirm={() => this.props.handleDelete(record.key)}>
//                         <Button type="danger" size="small">Delete</Button>
//                     </Popconfirm>
//                 ) : null,
//         },
//     ];

//     console.log(props.userDetails);
//     const dataSource = props.userDetails;
//     const components = {
//         body: {
//             row: EditableFormRow,
//             cell: EditableCell,
//         },
//     };
//     // const columnsh = this.columns.map(col => {
//     //     if (!col.editable) {
//     //         return col;
//     //     }
//     //     return {
//     //         ...col,
//     //         onCell: record => ({
//     //             record,
//     //             editable: col.editable,
//     //             dataIndex: col.dataIndex,
//     //             title: col.title,
//     //             handleSave: this.props.handleSave,
//     //         }),
//     //     };
//     // });
//     return (

//         <div>
//             <Table
//                 components={components}
//                 rowClassName={() => 'editable-row'}
//                 bordered
//                 dataSource={dataSource}
//                 columns={columns}
//             />
//         </div>
//     );

// }

// const mapStateToProps = state => {
//     return { userDetails: selectorDetails(state) };

// };

// const selectorDetails = (state) => {
//     const userDetails = state => state.userDetails;
//     return userDetails;
// }

// export default connect(mapStateToProps)(EditableTable);

// import { combineReducers } from 'redux';


// const userDetailsReducer = (userDetails = null, action) => {
//     if (action.type === 'SUBMIT_FORM') {
//         const { firstname, lastname, birthday, age, hobby } = action.payload;
//         return [{
//             key: 1,
//             firstname: firstname,
//             lastname: lastname,
//             birthday: birthday,
//             age: age,
//             hobby: hobby,
//         }];

//     }
//     return userDetails;
// };
// const submittedDetailsReducer = (userDetails = null, action) => {
//     if (action.type === 'SU_FORM') {
//         return action.payload;
//     }
//     return null;
// }

// export default combineReducers({
//     userDetails: userDetailsReducer,
//     submittedDetails: submittedDetailsReducer
// })
