import React from 'react';
import { connect } from 'react-redux';
import { submit, deleteDetail, handleSave } from '../../actions';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import Userform from './../form/form.js';
import {getDetailSelectorState} from '../selector.js'
import './table.css';

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

class EditableTable extends React.Component {
    
    constructor(props) {
        super(props);
        this.columns = [
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
                    this.props.userDetails.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.props.deleteDetail(record.key)}>
                            <Button type="danger" size="small">Delete</Button>
                        </Popconfirm>
                    ) : null, 
            }, 
        ];
   }

   
    render() {
        const dataSource  = this.props.userDetails;
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
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
                    handleSave: this.props.handleSave,
                }),
            };
        });
        return (
            
            <div>
                <Userform submit= {this.props.submit}/>
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
}



//USE FOR GETTING STATE AND PASSING IT TO SELECTOR FUNCTION
const mapStateToProps = state => {
    return { userDetails: getDetailSelectorState(state) };

};

export default connect(mapStateToProps, { submit, deleteDetail, handleSave })(EditableTable);











// const detailSelector = state => state.userDetails;

// const mapStateToProps = state => {
//     return { userDetails: detailSelector(state)};
    
// };

// export default connect(mapStateToProps, { submit, deleteDetail, handleSave})(EditableTable);