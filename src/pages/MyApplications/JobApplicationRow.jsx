
const JobApplicationRow = ({application,index}) => {
  // console.log(application)
  const {applicant_email,job_id}=application;
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
            <div className="text-sm opacity-50">Bangladesh</div>
          </div>
        </div>
      </td>

      {/* Job Info */}
      <td>
         {job_id}
      </td>
    </tr>

  );
};

export default JobApplicationRow;