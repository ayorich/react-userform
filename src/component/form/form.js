import React from 'react';
import './form.css';
import { Form, Input, Button, DatePicker } from 'antd';
import shortid from 'shortid';


function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
    
}

class HorizontalLoginForm extends React.Component {
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
                    'key':shortid.generate(),
                    'age': parseInt(values['age']),
                    'birthday': values['birthday'].format('DD-MM-YYYY'),
                };

                // TO PASS FORM DATA TO ACTION 
                this.props.click(dataSet);

                // console.log(dataSet);
                // this.props.click();

                //to clear fields and disable button
                this.props.form.resetFields();
                this.props.form.validateFields();
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
            <div className="form">
                <h2 className='head'>Please fill FORM inputs to update Table</h2>
            <Form onSubmit={this.handleSubmit} labelCol={{ span: 4 }} wrapperCol={{ span: 6 }} >
                <Form.Item label="FIRSTNAME" validateStatus={firstnameError ? 'error' : ''} help={firstnameError || ''}>
                    {getFieldDecorator('firstname', {
                        rules: [{ required: true, message: 'Please input your firstname!' }],
                    })(
                        <Input
                            placeholder="firstname"
                            type= "text"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="LASTNAME" validateStatus={lastnameError ? 'error' : ''} help={lastnameError || ''}>
                    {getFieldDecorator('lastname', {
                        rules: [{ required: true, message: 'Please input your lastname!' }],
                    })(
                        <Input
                            placeholder="lastname"
                            type="text"
                        />,
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 3, offset: 0 }} label="BIRTHDAY" validateStatus={birthError ? 'error' : ''} help={birthError || ''}>
                    {getFieldDecorator('birthday', {
                        rules: [{ required: true, message: 'Please select your date of birth!' }],
                    })(<DatePicker/>)}
                </Form.Item>
                <Form.Item label="AGE" validateStatus={ageError ? 'error' : ''} help={ageError || ''}>
                    {getFieldDecorator('age', {
                        rules: [{ required: true, message: 'Please input your age!' }],
                    })(
                        <Input
                            placeholder="Age"
                            type= "number"
                        />,
                    )}
                </Form.Item>
                <Form.Item label="HOBBY" validateStatus={hobbyError ? 'error' : ''} help={hobbyError || ''}>
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
            </div>
        );
    }
}

const UserForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default UserForm;