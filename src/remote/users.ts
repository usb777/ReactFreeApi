import { InternalServerError } from "../errors/InternalServerError"
import { reduxClient } from "./remote-client"
import { User } from "../model/User"
import { Role } from "../model/Role"


import {UserNotFoundError}  from "../errors/UserNotFoundError"


export const getAllUsers = async () => {
    try {
        let response = await reduxClient.get('/users')
        
        if(response.status === 200)
        {
            return response.data
        }
        else
        {
            throw new InternalServerError()
        }
    } catch (e){
        throw new InternalServerError()
    }
}



export async function getUserById(userId:number|undefined):Promise<User>{    
    try{
        let res = await reduxClient.get(`/users/${userId}`)

       
        return res.data
    } catch (e)
     {
        if(e.status === 400)
        {  throw e  } else if(e.status === 404)
          {
            throw new UserNotFoundError()
          }
        else{
            throw new InternalServerError()
        }
    }
}//end of class



//update User Info
export async function updateUser(
    userId: number,
    userName: string,
    password:string,
    firstName: string,
    lastName: string,
    email: string,
    role:Role,
    gender:string
  ): Promise<User> {
    let updateUser = {
      userId,
      userName,
      password,
      firstName,
      lastName,
      email,
      role,
      gender
    };
    let roleobject:Role = new Role(2,"User")
    updateUser.role = roleobject
    try {
      let response = await reduxClient.patch("/users", updateUser);
      console.log(response);
     
      return response.data;
    } catch (e) {
      if (e.status === 400) {
        throw e;
      } else {
        throw new InternalServerError();
      }
    }
  }
  


  // insert user 
export async function createUser(userId:number,username: string, password: string, firstName:string, 
  lastName:string,email:string,role:Role, gender:string):Promise<User> 
  {
  let createdUser = {
      userId:1,
      username,
      password,
      firstName,
      lastName,
      email,
      role,
      gender
  }

  let roleobject:Role = new Role(2,"User")
  createdUser.role = roleobject

  try {
      let res = await reduxClient.put("/users",createdUser)        
          return res.data        
  } 
  catch (e) {
          throw new InternalServerError()
      }
  }




