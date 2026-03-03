import axios from 'axios';
import useAuth from './useAuth'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000'
});

const useAxiosSecure = () => {
    const {user,signOutUser}=useAuth();
    axiosInstance.interceptors.request.use(config=>{
        config.headers.authorization = `Bearer ${user?.accessToken}`
        return config;
    },
  error=>{
    console.log(error)
    if(error.status===401 || error.status ===403){
      signOutUser()
      .then(()=>{
        console.log("Singn out user for 401 status code")
      }).catch(err=>[
        console.log(err)
      ])
    }
    return Promise.reject(error)
  }
  )
    //responce inteceptor

    axiosInstance.interceptors.response.use(response=>{
      return response;
    })
  return axiosInstance;
}

export default useAxiosSecure