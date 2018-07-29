import React, { Component } from 'react';
import { Form, Button, FormGroup, Label, Input, Col } from 'reactstrap';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            chkremenber: false
        };
    }

    handleSubmit = (event, errors, values) => {
        this.setState({errors, values});
    }

    render() {
        return (
            <Form className="form-horizontal m-t-20">
                <FormGroup>
                    <Col xs="12">
                        <Input className="form-control input-lg" name="username" type="text" placeholder="Tên đăng nhập" />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col xs="12">
                        <Input className="form-control input-lg" name="password" type="password" placeholder="Mật khẩu" />                        
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col xs="12">
                        <div className="checkbox checkbox-primary">
                            <Input id="checkbox-signup" name="chkremenber" type="checkbox" />
                            <Label> Ghi nhớ đăng nhập</Label>
                        </div>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col xs="12 text-center">
                        <Button className="btn btn-primary btn-lg w-lg waves-effect waves-light" type="submit">Đăng nhập</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default Login;
