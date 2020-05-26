import { IState } from "../reducer";
import { getAllUsersActionMapper } from '../action-mapper/Users-action-mappers'
import { connect } from "react-redux";
import { ViewAllUsersComponent } from "./ViewAllUsersComponent";


const mapStateToProps = (state:IState) => 
{
    return { 
        allUsers:state.allUsers.allUsers, // error
        errorMessage: state.allUsers.errorMessage
    }
}

const mapDispatchToProps = 
{
    getAllUsersActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllUsersComponent)