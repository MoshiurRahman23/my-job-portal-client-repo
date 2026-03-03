import { use } from 'react'
import JobApplicationRow from './JobApplicationRow';



const ApplicationList = ({myApplicationsPromise}) => {
    const applications = use(myApplicationsPromise);
    console.log(applications)
  return (
    <div>
        <h1 className='text-center font-semibold text-5xl my-5'>Jobs Application so far : {applications?.length}</h1>
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
               
            </tr>
            </thead>
            <tbody>
           {applications?.map((application,index)=><JobApplicationRow
            key={application._id}
            index={index}
            application={application}
           ></JobApplicationRow>)}
           
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default ApplicationList

