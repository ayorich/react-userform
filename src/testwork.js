import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);

}

class HorizontalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    key: '0',
                    firstname: 'ayodele ',
                    lastname: ' kayode',
                    birthday: '',
                    age: '32',
                    hobby: 'ball',
                },
                {
                    key: '1',
                    firstname: 'ayod',
                    lastname: ' emma',
                    birthday: '',
                    age: '32',
                    hobby: 'football',
                },
            ],
            count: 2,
        };
    }

    updateData = data => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            firstname: data.firstname,
            lastname: data.lastname,
            birthday: data.birthday,
            age: data.age,
            hobby: data.hobby,
        };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });

    };

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const dataSet = {
                    ...values,
                    'birthday': values['birthday'].format('DD-MM-YYYY'),
                };
                console.log('Received values of form: ', dataSet);
                this.updateData(dataSet);
                console.log(this.state);
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const firstnameError = isFieldTouched('firstname') && getFieldError('firstname');
        const lastnameError = isFieldTouched('lastname') && getFieldError('lastname');
        const hobbyError = isFieldTouched('hobby') && getFieldError('hobby');
        const ageError = isFieldTouched('age') && getFieldError('age');
        const birthError = isFieldTouched('birthday') && getFieldError('birthday');
        return (
            <Form onSubmit={this.handleSubmit} labelCol={{ span: 4 }} wrapperCol={{ span: 6 }}>
                <Form.Item label="Firstname" validateStatus={firstnameError ? 'error' : ''} help={firstnameError || ''}>
                    {getFieldDecorator('firstname', {
                        rules: [{ required: true, message: 'Please input your firstname!' }],
                    })(
                        <Input
                            placeholder="firstname"
                            type="text"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="Lastname" validateStatus={lastnameError ? 'error' : ''} help={lastnameError || ''}>
                    {getFieldDecorator('lastname', {
                        rules: [{ required: true, message: 'Please input your lastname!' }],
                    })(
                        <Input
                            placeholder="lastname"
                        />,
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 3, offset: 0 }} label="Birthday" validateStatus={birthError ? 'error' : ''} help={birthError || ''}>
                    {getFieldDecorator('birthday', {
                        rules: [{ required: true, message: 'Please select your date of birth!' }],
                    })(<DatePicker />)}
                </Form.Item>
                <Form.Item label="age" validateStatus={ageError ? 'error' : ''} help={ageError || ''}>
                    {getFieldDecorator('age', {
                        rules: [{ required: true, message: 'Please input your age!' }],
                    })(
                        <Input
                            placeholder="Age"
                            type="number"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="hobby" validateStatus={hobbyError ? 'error' : ''} help={hobbyError || ''}>
                    {getFieldDecorator('hobby', {
                        rules: [{ required: true, message: 'Please input your hobby!' }],
                    })(
                        <Input
                            placeholder="hobby"
                        />,
                    )}
                </Form.Item>

                <Form.Item wrapperCol={{ span: 10, offset: 4 }}>
                    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())} >
                        submit
          </Button>
                </Form.Item>
            </Form>
        );
    }
}

const UserForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default UserForm;