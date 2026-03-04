import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const HotJobCard = ({ job }) => {
  console.log(job)
  const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      
      {/* Company Info */}
      <div className="flex gap-3 p-3 items-center">
        <figure>
          <img
            className="w-16 h-16 object-contain rounded"
            src={company_logo}
            alt={`${company} Logo`}
          />
        </figure>
        <div>
          <h4 className="text-lg font-semibold">{company}</h4>
          <p className="flex items-center gap-1 text-sm text-gray-600">
            <FaMapMarkerAlt /> {location}
          </p>
        </div>
      </div>

      {/* Job Details */}
      <div className="card-body">
        <h2 className="card-title flex items-center justify-between">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>

        <p className="text-gray-700 text-sm line-clamp-3">{description}</p>

        {/* Requirements / Skills */}
        <div className="flex flex-wrap gap-2 mt-2">
          {requirements?.map((skill, index) => (
            <span
              key={index}
              className="border px-2 py-1 rounded-md text-sm cursor-default hover:text-purple-600 hover:bg-gray-200 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Salary & Button */}
        <div className="card-actions justify-between items-center mt-4">
          <p className="flex items-center gap-1 text-gray-700 font-medium">
            <FaDollarSign /> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>

          <Link to={`/jobs/${_id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;