import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './login';
import $ from 'jquery';
class Narbar extends Component {
    state = {  } 

    handleClick =()=>{
        $.ajax({
            url:"https://app165.acapp.acwing.com.cn/calculator/logout/",
            type:"get",
            
            success:resp=>{
                console.log(resp);
                if(resp.result==="success"){
                    window.location.href="/calculator";
                }
            },
        });
    }

    render_calc=()=>{
        if(this.props.is_login){
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/calculator/calc">计算器</Link>
                </li>
            )
        }else{
            return "";
        }
        
    }
    render_user=()=>{
        if(this.props.is_login){
            return (
                <React.Fragment>
                    <li className="nav-item">
                        <a className="nav-link active" >{this.props.username}</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.handleClick} className="nav-link" style={{cursor:"pointer"}}>退出</a>
                    </li>
                </React.Fragment>
            );
        }else{
            return(
                <React.Fragment>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/calculator/login">登录</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/calculator/register">注册</Link>
                    </li>
                </React.Fragment>
                
            );
        }

    }

    render() { 
        return (
            
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/calculator">web</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/calculator/home">首页</Link>
                            </li>
                            {this.render_calc()}
                            
                        </ul>
                        <ul className="navbar-nav">
                           {this.render_user()}
                        </ul>
                        </div>
                    </div>
                </nav>
            
        );
    }
}
 
export default Narbar;