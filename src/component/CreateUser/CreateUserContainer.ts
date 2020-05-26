import { IState } from "../../reducer"
import { CreateUserActionMapper } from "../../action-mapper/User-create-action-mappers"
import { connect } from "react-redux"
import { CreateUserComponent } from "./CreateUserComponent"



const mapStateToProps = (state:IState) =>{
    return {
        createdUser:state.createdUser.createdUser,
        errorMessage:state.createdUser.errorMessage
    }
}

//this will contain functions, component can call thm to create state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    CreateUserActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)( CreateUserComponent)