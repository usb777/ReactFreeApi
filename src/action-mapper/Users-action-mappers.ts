import { Dispatch } from "redux";
import { getAllUsers } from "../remote/users";

export const usersTypes = 
{
    GET_ALL_USERS: 'REDUX_GET_ALL_USERS', // Good
    FAILED_TO_RETRIEVE_USERS:'REDUX_FAILED_TO_RETRIEVE_USERS'  //Bad
}



export const getAllUsersActionMapper = () => async (dispatch:Dispatch) => 
{
    // try to get all users from a remote function
    try{
        let usersArray = await getAllUsers() // await - asyncronys function
       // console.log(usersArray);
        //if we do call dispatch with those users
        dispatch({
            type: usersTypes.GET_ALL_USERS,
            payload:{  usersArray  }   //promise
        })
    } 
    catch (e) //   
    {
            //catch any errors and dispatch a bad action
            console.log("====Error===" + e)
        dispatch({  type:usersTypes.FAILED_TO_RETRIEVE_USERS    })
    }
    finally  
    {   // close Database or file connection
        console.log("Was errror or didn't was for me nevermind, cos I want show it");
    }
    //function completes
}