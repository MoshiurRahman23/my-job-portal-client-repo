

import { Suspense } from "react"
import ApplicationList from "./ApplicationList"
import ApplicationStar from "./ApplicationStar"
import useAuth from "../../hooks/useAuth";
import { myApplicationPromise } from "../../api/ApplicationApi";
// console.log(myApplicationPromise)



const MyApplications = () => {
    const {user}=useAuth();
    console.log("User Firebase Acess Token",user.accessToken)
  return (
    <div className="min-h-screen">
    <ApplicationStar/>
    <Suspense fallback={"Loading your applications"}>
        <ApplicationList
            myApplicationPromise={myApplicationPromise(user?.email,user?.accessToken)}
        />
    </Suspense>
    </div>
  )
}

export default MyApplications;