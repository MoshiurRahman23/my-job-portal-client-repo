import { useLoaderData } from "react-router";


const ApplicantsTable = () => {
    const data = useLoaderData()
  return (
    <div className="w-full px-4 py-6">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800">
            Job Applicants
          </h2>
          <p className="text-sm text-gray-500">
            Total Applicants: {data.length}
          </p>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="table w-full">
            
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th>SL</th>
                <th>Applicant Email</th>
                <th>Job ID</th>
                <th>LinkedIn</th>
                <th>GitHub</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((applicant, index) => (
                <tr key={applicant._id} className="hover">
                  <td>{index + 1}</td>

                  <td className="font-medium">
                    {applicant.applicant_email}
                  </td>

                  <td className="text-sm text-gray-500">
                    {applicant.job_id}
                  </td>

                  <td>
                    <a
                      href={applicant.linkedIn}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </a>
                  </td>

                  <td>
                    <a
                      href={applicant.github}
                      target="_blank"
                      className="text-primary-800 hover:underline"
                    >
                      Repo
                    </a>
                  </td>

                  <td>
                    <button className="btn btn-sm btn-primary mr-2"
                    onClick={() => window.open(applicant.resume, "_blank")}
                    >
                      View CV
                    </button>
                    {/* <button className="btn btn-sm btn-success">
                      Contact
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsTable;