import useAxiosSecure from "../hooks/useAxiosSecure"

const useJobApi = () => {
    const axiosSecure = useAxiosSecure();
    const jobCreatedByPromise =async (email)=>{
        const res = await axiosSecure.get(`/jobs?email=${email}`)
        return res.data;
    }
  return {jobCreatedByPromise};
}

export default useJobApi;