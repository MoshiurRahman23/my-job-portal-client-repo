

import { Suspense } from "react"
import ApplicationList from "./ApplicationList"
import ApplicationStar from "./ApplicationStar"
import useAuth from "../../hooks/useAuth";
import useApplicationApi from "../../api/useApplicationApi";



const MyApplications = () => {
    const {user}=useAuth();
    const { myApplicationsPromise } = useApplicationApi();
    console.log("User Firebase Acess Token",user.accessToken)
  return (
    <div className="min-h-screen">
    <ApplicationStar/>
    <Suspense fallback={"Loading your applications"}>
        {
        user?.email && (
          <ApplicationList
            myApplicationsPromise={myApplicationsPromise(user.email)}
          />
        )
      }
    </Suspense>
    </div>
  )
}

export default MyApplications;