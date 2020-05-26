import './App.css';
import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom'
import NavBarComponent  from './navbar-component/NavBarComponent'

import ViewAllUsersComponent  from './viewallusers-component/ViewAllUsersContainer'
import UsersByIdComponent  from './component/UsersById/FindUserByIdContainer'
import UpdateUserComponent  from './component/UpdateUser/UpdateUserContainer'
import CreateUserComponent  from './component/CreateUser/CreateUserContainer'

/*  Redux Part    */
import { Provider } from 'react-redux';
import { store } from './Store';



function App() {

 
  return (
    <div >
      
      <Provider store={store}>  
      <Router>
       <NavBarComponent />
       
      <Switch>            
           
     
        
      <Route path='/users' component={ViewAllUsersComponent} />

      {/*   <Route path='/user/1' component={UsersByIdComponent} />   */}

      <Route exact path="/user/:uId" render={props => <UsersByIdComponent {...props.match.params} />} />
      <Route exact path="/user/update/:uId" render={props => <UpdateUserComponent {...props.match.params} />} />       
      <Route path='/user-create' component={ CreateUserComponent  } />


       </Switch>

      </Router>
      </Provider>
    </div>
  );
}

export default App;
