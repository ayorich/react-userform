import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import Userform from './../form/form.js';
import {getDetailSelectorState} from '../selector.js'
import './table.css';
import { createUser } from '../../actions';

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    state = {
        editing: false,
    };

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    };

    save = e => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error && error[e.currentTarget.id]) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    };

    renderCell = form => {
        this.form = form;
        const { children, dataIndex, record, title } = this.props;
        const { editing } = this.state;
        return editing ? (
            <Form.Item style={{ margin: 0 }}>
                {form.getFieldDecorator(dataIndex, {
                    rules: [
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ],
                    initialValue: record[dataIndex],
                })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
            </Form.Item>
        ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{ paddingRight: 24 }}
                    onClick={this.toggleEdit}
                >
                    {children}
                </div>
            );
    };

    render() {
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
                ) : (
                        children
                    )}
            </td>
        );
    }
}


const EditableTable = () => {
    const propstate = useSelector(getDetailSelectorState);
    // console.log(propstate);
     const dispatch = useDispatch();
     
        const columnline = [
            {
                title: 'FirstName',
                dataIndex: 'firstname',
                width: '20%',
                editable: true,
            },
            {
                title: 'LastName',
                dataIndex: 'lastname',
                width: '20%',
                editable: true,
            },
            {
                title: 'Birthday',
                dataIndex: 'birthday',
                editable: true,
            },
            {
                title: 'age',
                dataIndex: 'age',
                editable: true,
            },
            {
                title: 'Hobby',
                dataIndex: 'hobby',
                editable: true,
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    propstate.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={
                            () =>dispatch(null,(record.key))
                            }>
                            <Button type="danger" size="small">Delete</Button>
                        </Popconfirm>
                    ) : null, 
            }, 
        ];


        const dataSource  = propstate;

        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

    const columns = columnline.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: (row) => dispatch(null, (row)),
                }),
            };
        }); 

    const click = (dataset) => dispatch(createUser(dataset));

        return (
            
            <div>
                
                <Userform click={click} />
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    
}


export default EditableTable;




















































































































// const detailSelector = state => state.userDetails;

// const mapStateToProps = state => {
//     return { userDetails: detailSelector(state)};
    
// };

// export default connect(mapStateToProps, { submit, deleteDetail, handleSave})(EditableTable);