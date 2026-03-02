// import ApplicationStar from "../MyApplications/ApplicationStar";
import useAuth from "../../hooks/useAuth";
import { Suspense } from "react";
import JobsList from "./JobsList";
import { jobCreatedByPromise } from "../../api/JobsApi";

const MyPostedJobs = () => {
  const { user } = useAuth();

  if (!user?.email) {
    return <div>Loading user...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* <ApplicationStar /> */}

      <Suspense fallback={"Loading your Jobs"}>
        <JobsList
          jobCreatedByPromise={jobCreatedByPromise(user?.email)}
        />
      </Suspense>
    </div>
  );
};
export default MyPostedJobs;