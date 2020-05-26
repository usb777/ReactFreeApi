import React, { SyntheticEvent } from "react"
import { User } from "../../model/User"
import { Col, FormGroup, Label, Input, Form, Container, Button, Card, CardTitle, CardText } from "reactstrap"
import { Redirect } from "react-router"
import { Link } from "react-router-dom"
import { Role } from "../../model/Role"

interface IUpdateUserProps {
    updatedUser: User
    errorMessage: string
    UpdateUserActionMapper: (userId: number, username: string, password: string, firstName: string, lastName: string, email: string, role:Role, gender:string) => void
    uId:number
   
}

interface IUpdateUserState {
    userId: number
    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    role: Role
    gender:string


}


export class UpdateUserComponent extends React.Component<IUpdateUserProps, IUpdateUserState>{
    constructor(props: any) {
        super(props)
        this.state = {
            userId: this.props.uId,
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: '',
            role: new Role(2,'User'),
            gender:''
          

        }
    }




     componentDidMount()
     {

      // const uId =  this.props.uId



     //  this.setState({ userId:  uId }) 
   

     }



    updateUserId = (e: any) => {
        this.setState({
            userId: e.currentTarget.value
        })
    }

    updateUsername = (e: any) => {
        this.setState({
            username: e.currentTarget.value
        })
    }

    updatePassword = (e: any) => {
        this.setState({
            password: e.currentTarget.value
        })
    }

    updateFirstName = (e: any) => {
        this.setState({
            firstName: e.currentTarget.value
        })
    }

    updateLastName = (e: any) => {
        this.setState({
            lastName: e.currentTarget.value
        })
    }

    updateEmail = (e: any) => {
        this.setState({
            email: e.currentTarget.value
        })
    }


    updateGender = (e: any) =>
   {
        this.setState({   gender: e.currentTarget.value     })
   }


    submitUser = async (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.UpdateUserActionMapper(this.state.userId, this.state.username, this.state.password, this.state.firstName, this.state.lastName, this.state.email, new Role(2,'User'),this.state.gender)
        // when we reach this point we don;t get that return value from the mapper
        // that value got hijacked and was sent to dispatch
    }


    render() {
        return (
          
                this.props.updatedUser.userName === '' ?
                    <>
                        <Link to="/loggedInPage">Back to Homepage</Link>
                        <br />
                        <Container>
                            <h2>Update User</h2>
                            <Col>
                                <Form onSubmit={this.submitUser}>
                                    <FormGroup>
                                        <Label>userId</Label>
                                        <Input onChange={this.updateUserId} value={this.state.userId} type="number" name="userId" id="userId" placeholder="userId of user to update" required />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>username</Label>
                                        <Input onChange={this.updateUsername} value={this.state.username} type="text" name="username" id="username" placeholder="new username" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>password</Label>
                                        <Input onChange={this.updatePassword} value={this.state.password} type="password" name="password" id="password" placeholder="new password" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>First Name</Label>
                                        <Input onChange={this.updateFirstName} value={this.state.firstName} type="text" name="firstName" id="firstName" placeholder="First Name" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>Last Name</Label>
                                        <Input onChange={this.updateLastName} value={this.state.lastName} type="text" name="lastName" id="lastName" placeholder="Last Name" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label>email</Label>
                                        <Input onChange={this.updateEmail} value={this.state.email} type="email" name="email" id="email" placeholder="Email" />
                                    </FormGroup>


                                    <FormGroup>
                                        <Label>Gender</Label>
                                        <Input onChange={this.updateGender} value={this.state.gender} type="text" name="gender" id="gender" placeholder="gender" />
                                    </FormGroup>

                                    <Button>Submit</Button>
                                </Form>
                            </Col>
                        </Container>
                    </>
                    :
                    <>
                        <Card>
                            <h3>Updated User</h3>
                            <CardTitle>{this.props.updatedUser.firstName} {this.props.updatedUser.lastName}</CardTitle>
                            <CardText>{`Username: ${this.props.updatedUser.userName}`}</CardText>
                            <CardText>{`Role: ${this.props.updatedUser.role.role}`}</CardText>
                            <CardText>{`Email: ${this.props.updatedUser.email}`}</CardText>
                            <br />
                            <Link to="/loggedInPage">Back to Homepage</Link>
                        </Card>

                    </>
        )
    }
}//end of class