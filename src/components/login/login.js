import React, { Component } from 'react';
import { Button, FormGroup, Label, Col } from 'reactstrap';
import { isEmpty } from 'validator';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

const required = (value) => {
    if (isEmpty(value)) {
        return <label className="form-text text-danger" style={{padding: "5px"}}>Tên đăng nhập không được để trống</label>;
    }
}

const minLength = (value) => {
    if (value.trim().length < 6) {
        return <label className="form-text text-danger" style={{padding: "5px"}}>Mật khẩu không được nhỏ hơn 6 kí tự</label>;
    }
}

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            chkremenber: false
        };
    }

    // handleChange = event => {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    //     this.setState({
    //         [name]: value
    //     });
    // };

    onSubmit(e){
        e.preventDefault();
        if(this.form.validateAll()){
            alert("success");
        }

    }

    render() {
        return (
            <Form className="form-horizontal m-t-20" onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}> 
                <FormGroup>
                    <Col xs="12">
                        <Input 
                            className="form-control input-lg" 
                            name="username" type="text" 
                            placeholder="Tên đăng nhập" 
                            validations={[required]}
                        />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col xs="12">
                        <Input 
                            className="form-control input-lg" 
                            name="password" 
                            type="password" 
                            placeholder="Mật khẩu" 
                            validations={[required, minLength]}
                        />                        
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
