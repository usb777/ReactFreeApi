import { IState } from "../../reducer"
import { UpdateUserActionMapper } from "../../action-mapper/User-update-action-mappers"
import { connect } from "react-redux"
import { UpdateUserComponent } from "./UpdateUserComponent"



const mapStateToProps = (state:IState) =>{
    return {
        updatedUser:state.updatedUser.updatedUser,
        errorMessage:state.updatedUser.errorMessage
    }
}

//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = {
    //that contains functions that can send actions
    UpdateUserActionMapper
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(UpdateUserComponent)