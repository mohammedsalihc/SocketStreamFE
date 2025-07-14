import axios from "axios"
import { ApiEndPoints } from "./api"

export const Login = async (body)=>{
    return await axios.post(ApiEndPoints.LOGIN,body)
}

export const Register =async (body)=>{
    return await axios.post(ApiEndPoints.REGISTER,body)
}

export const GOOGLE_SIGN =async (body)=>{
    return await axios.post(ApiEndPoints.GOOGLE_SIGN,body)
}

export const PROFILE = async(token)=>{
    return await axios.get(ApiEndPoints.PROFILE,{headers:{Authorization:token}})
}

export const SetToken = (token)=>{
    localStorage.setItem('SStoken',token)
}

export const Logout = ()=>{
    localStorage.removeItem("SStoken")
}