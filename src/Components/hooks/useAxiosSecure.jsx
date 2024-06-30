import axios from "axios";
import { useEffect } from "react";
import { TbRuler2 } from "react-icons/tb";
import useAuth from './useAuth'
import { useNavigate } from "react-router-dom";
const axiossecure=axios.create({

baseURL:'https://hotel-server-nine.vercel.app',
withCredentials : true

})
const useAxiosSecure=()=>{
const {logOut}=useAuth();
const navigate=useNavigate();
useEffect(()=>{
axiossecure.interceptors.response.use(res=>{
return res
},
error=>{
console.log('error trackedin the intercetor', error.response)
if(error.response.status===401||error.response.status===403)
{
console.log('log out the user')
logOut()
.then(()=>{
navigate('/login')
})
.catch(error=>console.log(error))
}
}
)
},[])

return axiossecure;
}
export default useAxiosSecure