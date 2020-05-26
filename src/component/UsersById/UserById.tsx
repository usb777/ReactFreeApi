import React, { SyntheticEvent } from 'react';
import { User } from '../../model/User';
import { FormGroup, Label, Col, Input, Button, Card, CardText, CardTitle } from 'reactstrap';
import { Redirect } from 'react-router';


interface IUserIdProps
{
    userById:User   
    errorMessage:string
    UserByIdActionMapper:(uId:number)=>void
    uId:number
}

interface IuserIdState
{
    userId:number
}

export class UsersByIdComponent extends React.Component<IUserIdProps,IuserIdState>{
  
    constructor(props:any){
   super(props)
   this.state = ({  userId: this.props.uId  })
}


    getUserId = async (e: SyntheticEvent) =>
    {
        e.preventDefault()
        this.props.UserByIdActionMapper(this.state.userId)
    }

    componentDidMount ()
    {
        this.props.UserByIdActionMapper(this.state.userId) 
    }

    

render(){
    
    return(
      <div>
         <Card>
                <CardTitle>{this.props.userById.firstName} {this.props.userById.lastName}</CardTitle>
                <CardText>{`Username: ${this.props.userById.userName}`}</CardText>
                <CardText>{`Role: ${this.props.userById.role.role}`}</CardText>
                <CardText>{`Email: ${this.props.userById.email}`}</CardText>
        </Card>
        <p>{this.props.errorMessage}</p>
       </div>
    )
}

}//end of class