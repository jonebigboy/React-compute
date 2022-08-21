import React, { Component } from 'react';
import Base from './base';
import $ from 'jquery';


class Login extends Component {
    state = { 
        error_message:"",
        username:"",
        password:"",
    } 
    

    handleClick=e=>{
        e.preventDefault();
        if(this.state.username===""){
            this.setState({error_message:"usrname is empty"});
        }else if(this.state.password===""){
            this.setState({error_message:"password is empty"});
        }else{
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/calculator/login/",
                type: "get",
                data: {
                    username:this.state.username,
                    password:this.state.password,
                },
                dataType:"json",
                success:resp=>{
                    if(resp.result==="success"){
                        window.location.href="/calculator/";
                    }else{
                        this.setState({error_message:resp.result});
                    }
                },
            })
        };
        
    }   

    render() { 
        return (
            <React.Fragment>
                <Base>
                    <form>
                        <div className="mb-3">
                            <label htmlFor ="username" className="form-label">Username</label>
                            <input onChange={e=>{this.setState({username:e.target.value})}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input onChange={e=>{this.setState({password:e.target.value})}} type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div style={{height:"2rem",fontSize:"1rem"}}>
                            {this.state.error_message}
                        </div>
                        <button onClick={this.handleClick} type="submit" className ="btn btn-primary">登录</button>
                    </form>
                </Base>
            </React.Fragment>
        );
    }
}
 
export default Login;