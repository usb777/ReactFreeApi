import { Dispatch } from "redux";
import { getUserById } from "../remote/users";

export const FindUserByIdTypes = {
    SUCCESSFUL : 'FOUND_USER',
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    INTERNAL_SERVER: 'INTERNAL_SERVER_ERROR'
}

export const UserByIdActionMapper = (userId:number) => async  (dispatch:Dispatch) => {
    try{
        let user = await getUserById(userId)
        dispatch({
            type:  FindUserByIdTypes.SUCCESSFUL,
            payload:{
                     user
                    }
        })
    }catch(e){
        if(e.status === 404){
            dispatch({
                type: FindUserByIdTypes.USER_NOT_FOUND
            })
        }else {
            dispatch({
                type: FindUserByIdTypes.INTERNAL_SERVER
            })
        }
    }

}