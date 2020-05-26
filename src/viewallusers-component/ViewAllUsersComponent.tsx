import React from 'react'
import { User } from '../model/User';
import {Link} from 'react-router-dom' // <a href = '' >
/*
import { CardDeck } from '../general-components/card-deck-component/CardDeckComponent';
import { UserInfoComponent } from '../user-info/UserInfoComponent';
*/

import { Redirect } from 'react-router';
import { Table} from 'reactstrap'

interface IViewAllUsersProps {
    allUsers:User[]
    errorMessage:string
    getAllUsersActionMapper: ()=>void
}


export class ViewAllUsersComponent extends React.Component<IViewAllUsersProps,any>{

    // runs when component starts to exist
    componentDidMount(){
        // check to see if we already have users (redux store)
        if(this.props.allUsers.length === 0)
        {
                      
            this.props.getAllUsersActionMapper()
        }
           
        else {    }
    }

    render(){
       
      //Start Typescript

        let userDisplay = this.props.allUsers.map((person,index) => {
            return (  
                <tr>
                    <td><Link to={{ pathname: `/user/${person.userId}` }}>{person.userId}</Link></td>
                    <td>{person.userName}</td>  
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>                
                    <td>{person.email}</td>
                    <td>{person.role.role}</td>
                    <td>{person.gender}</td> 
                   <td><Link to={{ pathname: `/user/update/${person.userId}` }}>update</Link> </td>
                

                </tr>
            )
        })

        // end Typescript
      //  console.log(userDisplay);
        return(
<div>
<br/><br/>
<Link to="/user-create">create new user</Link> <br/><br/>

<Table striped bordered hover size="sm">   <thead>
                            <tr>
                                <th>id</th>
                                <th>username</th> 
                                <th>first name</th>
                                <th>last name</th>
                                <th>email</th> 
                                <th>role name</th> 
                                <th>gender</th>
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userDisplay}
                        </tbody>
                    </Table>

</div>

            
        )
    }
}