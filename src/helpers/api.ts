import axios from "axios";
import { InputUser, IUser } from "./types";

const Axios = axios.create({
    baseURL:'http://localhost:4000'
})

export const getAllUsers = async():Promise<IUser[]> => {
    const response = await Axios.get('/users')
    return response.data
}

export const getUserById = async(id:number):Promise<IUser> => {
    const response = await Axios.get("/users/"+id)
    return response.data
}

export const addNewUser = async(data:InputUser):Promise<IUser> => {
    const response = await Axios.post("/users", data)
    return response.data
}

export const deleteUser = async(id:number):Promise<IUser> => {
    const response = await Axios.delete('/users/'+id)
    return response.data
}

export const updateUser = async(data:IUser):Promise<IUser> => {
    const response = await Axios.put("/users/" + data.id, data)
    return response.data
}