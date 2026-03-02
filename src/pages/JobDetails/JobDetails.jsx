import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
  const { _id, title, company, applicationDeadline, description, requirements, location, salaryRange } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-base-100 shadow-lg rounded-lg">
      
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-2"><strong>Company:</strong> {company}</p>
      <p className="text-gray-600 mb-2"><strong>Location:</strong> {location}</p>
      <p className="text-gray-600 mb-4"><strong>Deadline:</strong> {applicationDeadline}</p>
      <p className="text-gray-700 mb-4">{description}</p>

      {requirements && requirements.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Requirements:</h3>
          <ul className="list-disc list-inside">
            {requirements?.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {salaryRange && (
        <p className="mb-6 text-gray-700">
          <strong>Salary:</strong> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
      )}

      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary hover:scale-105 transition-transform duration-200">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobDetails;