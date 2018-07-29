import React, { Component } from 'react';
import Login from '../components/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/animate.css';
import '../assets/css/animate.css';
import '../assets/css/waves-effect.css';
import '../assets/css/helper.css';
import '../assets/css/style.css';

class LoginPage extends Component {
  render() {
    return (
        <div className="wrapper-page">
            <div className="panel panel-color panel-primary panel-pages">
                <div className="panel-heading bg-img"> 
                    <div className="bg-overlay"></div>
                    <h3 className="text-center m-t-10 text-white"> HỆ THỐNG <strong>HTKH</strong> VNPOST</h3>
                </div> 
                <div className="panel-body">
                    <Login />
                </div>
            </div>
        </div>
    );
  } 
}

export default LoginPage;
