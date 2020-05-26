import { IState } from "../../reducer"
import { connect } from "react-redux"
import { UsersByIdComponent } from "./UserById"
import { UserByIdActionMapper } from "../../action-mapper/UserById-action-mappers"

const mapStateToProps = (state:IState) =>{
    return {
        userById:     state.userById.userById,
        errorMessage: state.userById.errorMessage
    }
}
//this will contain functions, component can call thm to update state (action mappers)
const mapDispatchToProps = 
{    //that contains functions that can send actions
    UserByIdActionMapper    
}

//connect is Higher order Component that wraps our component
export default connect(mapStateToProps,mapDispatchToProps)(UsersByIdComponent)