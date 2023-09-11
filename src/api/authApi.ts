import axios from "axios"

const url: string = "http://localhost6666/api/v1"

export const Register = async(data: any)=>{
return await axios.post(`${url}/register`, data).then((res: any)=>{
    return res.data.data
})
}