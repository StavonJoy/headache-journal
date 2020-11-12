import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
// import Users from "../Users/Users";
import "./App.css";
import AddHeadache from '../AddHeadache/AddHeadache';
import HeadacheList from '../HeadacheList/HeadacheList';
import * as headacheAPI from "../../services/headaches-api";
// import HeadacheCard from '../../components/HeadacheCard/HeadacheCard'
// import * as userService from "../../services/userService";

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: authService.getUser(),
      headaches: [],
    }
  }
  
  handleDeleteHeadache = async id => {
    if(authService.getUser()){
      await headacheAPI.deleteOne(id);
      this.setState(state => ({
        headaches: state.headaches.filter(h => h._id !== id)
      }), () => this.props.history.push('/headaches'));
    } else {
      this.props.history.push('/login')
    }
  }

  handleAddHeadache = async newHeadacheData => {
    const newHeadache = await headacheAPI.create(newHeadacheData);
    newHeadache.owner = {name: this.state.user.name, _id: this.state.user._id}
    this.setState(state => ({
      headaches: [...state.headaches, newHeadache]
    }), () => this.props.history.push('/headaches'));
  }

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  async componentDidMount() {
    const headaches = await headacheAPI.getAll();
    this.setState({ headaches })
  }

  render() {
    const {user} = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Headache Journal</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        {/* <Route
          exact path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        /> */}
        <Route 
          exact path='/headaches/add' 
          render={() => 
            authService.getUser() ?
          <AddHeadache
            handleAddHeadache = {this.handleAddHeadache}
            user={this.state.user}
          />
          :
          <Redirect to='/login' />
          }
        />
        <Route exact path='/headaches'
          render={() => authService.getUser() ? 
          <HeadacheList
            headaches = {this.state.headaches}
            user={this.state.user}
            handleDeleteHeadache={this.handleDeleteHeadache}
          />
          :
          <Redirect to='/login' />
          } 
        />
      </>
    );
  }
}

export default App;
