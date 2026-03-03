import { use } from "react";
import { Link } from "react-router";

const JobsList = ({jobCreatedByPromise} ) => {
  const jobs = use(jobCreatedByPromise); 

  return (
     <div className="p-4 md:p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        My Posted Jobs: {jobs?.length}
      </h1>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden lg:block overflow-x-auto rounded-xl border shadow">
        <table className="table table-zebra">
          <thead className="bg-base-200">
            <tr>
              <th>SL</th>
              <th>Company</th>
              <th>Job Title</th>
              <th>Category</th>
              <th>Type</th>
              <th>Salary</th>
              <th>Deadline</th>
              <th>Location</th>
              <th>Applicants</th>
            </tr>
          </thead>

          <tbody>
            {jobs?.map((job, idx) => (
              <tr key={job._id} className="hover">
                <th>{idx + 1}</th>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10">
                        <img src={job.company_logo} alt={job.company} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">
                        HR: {job.hr_name}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="font-semibold">{job.title}</td>

                <td>
                  <span className="badge badge-outline">
                    {job.category}
                  </span>
                </td>

                <td>
                  <span className="badge badge-primary badge-outline">
                    {job.jobType}
                  </span>
                </td>

                <td>
                  {job.salaryRange?.min} — {job.salaryRange?.max}{" "}
                  {job.salaryRange?.currency}
                </td>

                <td className="text-red-500 font-medium">
                  {job.applicationDeadline}
                </td>

                <td>{job.location}</td>

                <td>
                  <Link to={`/applications/jobs/${job._id}`}>
                    <button className="btn btn-xs btn-primary">
                      View Applicants
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE / TABLET CARD VIEW ================= */}
      <div className="lg:hidden grid gap-4">
        {jobs?.map((job, ) => (
          <div
            key={job._id}
            className="bg-base-100 shadow-md rounded-xl p-4 border"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={job.company_logo}
                alt={job.company}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h2 className="font-bold">{job.title}</h2>
                <p className="text-sm opacity-60">{job.company}</p>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-2 text-sm mb-3">
              <p><span className="font-semibold">Category:</span> {job.category}</p>
              <p><span className="font-semibold">Type:</span> {job.jobType}</p>
              <p>
                <span className="font-semibold">Salary:</span>{" "}
                {job.salaryRange?.min} — {job.salaryRange?.max}{" "}
                {job.salaryRange?.currency}
              </p>
              <p>
                <span className="font-semibold">Deadline:</span>{" "}
                <span className="text-red-500">
                  {job.applicationDeadline}
                </span>
              </p>
              <p className="col-span-2">
                <span className="font-semibold">Location:</span>{" "}
                {job.location}
              </p>
            </div>

            {/* Button */}
        
            <Link to={`/applications/jobs/${job._id}`}>
                <button className="btn btn-primary btn-sm w-full">
                    View Applicants
                </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsList;
