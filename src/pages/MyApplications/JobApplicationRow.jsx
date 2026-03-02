
const JobApplicationRow = ({ application, index }) => {
  const { applicant_email, job_id } = application;

  const handleDeleteJobs = (id) => {
  if (!confirm("Are you sure you want to delete this application?")) {
    return;
  }

  fetch(`http://localhost:5000/application/${id}`, {
    method: "DELETE",
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // Optional: update UI after delete
    })
    .catch(error => {
      console.error("Delete failed:", error);
    });
};

  return (
   
    <tr>
      {/* Serial Number */}
      <th>{index + 1}</th>

      {/* Applicant Info */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Applicant Avatar"
              />
            </div>
          </div>

          <div>
            <div className="font-bold">{applicant_email}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>

      {/* Job Info */}
      <td>
        {job_id}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>

      {/* Favorite Color */}
      <td>Purple</td>

      {/* Action */}
      <th>
        <button onClick={handleDeleteJobs} className="btn btn-ghost btn-error btn-xs">
          Delete
        </button>
      </th>
    </tr>

  );
};

export default JobApplicationRow;