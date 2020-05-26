import React, { SyntheticEvent } from "react"
import { User } from "../../model/User"
import { Col, FormGroup, Label, Input, Form, Container, Button, Card, CardTitle, CardText } from "reactstrap"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"
import { Role } from "../../model/Role"

interface ICreateUserProps 
{
    createdUser: User
    errorMessage: string
    CreateUserActionMapper: (userId: number, username: string, password: string, firstName: string, lastName: string, email: string, role:Role, gender:string) => void
}

interface ICreateUserState 
{
    userId: number
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    role: Role
    gender:string
}

export class CreateUserComponent extends React.Component<ICreateUserProps, ICreateUserState>{
    constructor(props: any) 
    {
        super(props)
        this.state = 
        {
            userId: 0,
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            role: new Role(2,'User'),
            gender:''       
        }
    }




    createUserId = (e: any) => 
    {
        this.setState({ userId: e.currentTarget.value })
    }

    createUsername = (e: any) => {
    
        this.setState({
            username: e.currentTarget.value
        })
    }

    createPassword = (e: any) => {
        this.setState({
            password: e.currentTarget.value
        })
    }

    createFirstName = (e: any) => {
        this.setState({
            firstName: e.currentTarget.value
        })
    }

    createLastName = (e: any) => {
        this.setState({
            lastName: e.currentTarget.value
        })
    }

    createEmail = (e: any) => {
        this.setState({
            email: e.currentTarget.value
        })
    }


    createGender = (e: any) =>
   {
        this.setState({   gender: e.currentTarget.value     })
   }


    submitUser = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.CreateUserActionMapper(this.state.userId, this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email, new Role(2,'User'),this.state.gender)
        // when we reach this point we don;t get that return value from the mapper
        // that value got hijacked and was sent to dispatch
    }


    render() {
        return (
          
                               
                        <Container>
                            <h2>New User</h2>
                            <Col>
                                <Form onSubmit={this.submitUser}>
                                    <FormGroup>
                                        <Label>userId</Label>
                                        <Input onChange={this.createUserId} value={this.state.userId} type="number" name="userId" id="userId" placeholder="userId of user to update" required />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>username</Label>
                                        <Input onChange={this.createUsername} value={this.state.username} type="text" name="username" id="username" placeholder="new username" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>password</Label>
                                        <Input onChange={this.createPassword} value={this.state.password} type="password" name="password" id="password" placeholder="new password" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>First Name</Label>
                                        <Input onChange={this.createFirstName} value={this.state.firstName} type="text" name="firstName" id="firstName" placeholder="First Name" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>Last Name</Label>
                                        <Input onChange={this.createLastName} value={this.state.lastName} type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>email</Label>
                                        <Input onChange={this.createEmail} value={this.state.email} type="email" name="email" id="email" placeholder="Email" />
                                    </FormGroup>


                                    <FormGroup>
                                        <Label>Gender</Label>
                                        <Input onChange={this.createGender} value={this.state.gender} type="text" name="gender" id="gender" placeholder="gender" />
                                    </FormGroup>

                                    <Button>Submit</Button>
                                </Form>
                            </Col>
                        </Container>
                    
                                   
        )
    }
}//end of class