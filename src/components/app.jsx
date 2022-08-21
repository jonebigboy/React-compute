import React, { Component } from 'react';
import Narbar from './navbar';
import Home from './home';
import Nofind from './404';
import Calc from './calc';
import Login from './login';
import Register from './register';
import { Routes,Route,Navigate } from 'react-router-dom';
import $ from 'jquery';

class App extends Component {
    state = { 
        is_login:true,
        username:"jonebigboy",
    }
    
    componentDidMount(){
        return ;
        $.ajax({
            url:"https://app165.acapp.acwing.com.cn/calculator/get_status/",
            type:"get",
            dataType:"json",
            success:resp=>{
                console.log(resp);
                if(resp.result==="login"){
                    this.setState({
                        is_login:true,
                        username:resp.username,
                    });
                }else{
                    this.setState({
                        is_login:false,
                    });
                }
            },
        });
    }
    
    render() { 
        return (
            <React.Fragment>
                <Narbar is_login={this.state.is_login} username={this.state.username}/> 
                <div className='container'>
                    <Routes>
                        <Route path='/calculator' element={<Home/>}/>
                        <Route path='/calculator/home' element={<Home/>}/>
                        <Route path='/calculator/calc' element={this.state.is_login ? <Calc/>:<Navigate replace to ="/calculator/login"/>}/>
                        <Route path='/calculator/login' element={this.state.is_login ? <Navigate replace to ="/calculator/home"/>:<Login/>}/>
                        <Route path='/calculator/register' element={this.state.is_login ? <Navigate replace to ="/calculator/home"/>:<Register/>}/>
                        <Route path='/calculator/404' element={<Nofind/>}/>
                        <Route path='/calculator/*' element={<Navigate replace to ="/calculator/404"/>}/>
                    </Routes>
                   
                </div>
            </React.Fragment>
            
        );
    }
}
 
export default App;