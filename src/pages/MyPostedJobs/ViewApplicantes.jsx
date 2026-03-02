import { useLoaderData, useParams } from "react-router";

const ViewApplicantes = () => {
  const { job_id } = useParams();
  const {application} =useLoaderData();
  console.log( application);

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10">

        {/* Header */}
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Applicants for Job {application?.length}
          </h1>
          <p className="text-sm opacity-70 mt-1">
            Job ID: <span className="font-medium">{job_id}</span>
          </p>
        </div>

        {/* Applicants Table */}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>SL</th>
                <th>Applicant</th>
                <th>Email</th>
                <th>Resume</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {/* Example row */}
              <tr>
                <th>1</th>
                <td>John Doe</td>
                <td>john@email.com</td>
                <td>
                  <button className="btn btn-xs btn-outline">
                    View Resume
                  </button>
                </td>
                <td>
                  <span className="badge badge-success badge-sm">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        <div className="text-center mt-8 text-gray-500">
          No applicants yet.
        </div>

      </div>
    </div>
  );
};

export default ViewApplicantes;