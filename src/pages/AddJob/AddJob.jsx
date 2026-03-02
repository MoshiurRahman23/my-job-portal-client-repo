/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const AddJob = () => {
const{user}=useAuth();
const [loading, setLoading] = useState(false);

const handleAddJob=async(e)=>{
     e.preventDefault();
     const form = e.target;
     const formData = new FormData(form);
     const jobData = Object.fromEntries(formData.entries());
      try {
    const res = await axios.post(
      "http://localhost:5000/jobpost",
      jobData
    );

    console.log(res.data);
    toast("Job posted successfully ✅");
    form.reset();
  } catch (err) {
    toast("Something went wrong ❌");
    console.error(err);
  }
}

    // const handleAddJob = (e) => {
    //         e.preventDefault();

    //         const form = e.target;
    //         const formData = new FormData(form);

    //         // Convert FormData to normal object
    //         const jobData = Object.fromEntries(formData.entries());

    //         console.log(jobData);

    //         setLoading(true);

    //         fetch("http://localhost:5000/jobpost", {
    //             method: "POST",
    //             headers: {
    //             "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(jobData),
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //             // console.log("Job added:", data);
    //             toast("Job posted successfully ✅");
    //            setLoading(false);
    //             form.reset();
    //             })
    //             .catch(err => {
    //             console.error(err);
    //             toast("Something went wrong ❌");
    //             setLoading(false);
    //             });
    // };
  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-6 md:p-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-8"
        >
          Add a{" "}
          <motion.span
            animate={{ color: ["#2563eb", "#9333ea", "#2563eb"] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            New Job
          </motion.span>
        </motion.h1>

        <form  onSubmit={handleAddJob} className="space-y-8">

          {/* Basic Info */}
          <fieldset className="border rounded-xl p-5 space-y-4">
            <legend className="font-semibold text-lg px-2">
              Basic Information
            </legend>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">Job Title</label>
                <input
                  type="text"
                  name="title"
                  className="input input-bordered w-full"
                  placeholder="Enter job title"
                />
              </div>

              <div>
                <label className="label">Company Name</label>
                <input
                  type="text"
                  name="company"
                  className="input input-bordered w-full"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="label">Location</label>
                <input
                  type="text"
                  name="location"
                  className="input input-bordered w-full"
                  placeholder="Enter job location"
                />
              </div>

              <div>
                <label className="label">Company Logo URL</label>
                <input
                  type="text"
                  name="logo"
                  className="input input-bordered w-full"
                  placeholder="Paste logo URL"
                />
              </div>
            </div>
          </fieldset>

          {/* Job Type */}
          <fieldset className="border rounded-xl p-5 space-y-5">
            <legend className="font-semibold text-lg px-2">
                Job Type & Category
            </legend>

            <div className="flex flex-col md:flex-row md:items-center gap-5">

            {/* Job Type Radios */}
            <div className="flex flex-wrap gap-4 justify-evenly md:w-2/3">
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                type="radio"
                name="jobType"
                value="On-site"
                className="radio"
                />
                On-site
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
                <input
                type="radio"
                name="jobType"
                value="Remote"
                className="radio"
                />
                Remote
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
                <input
                type="radio"
                name="jobType"
                value="Hybrid"
                className="radio"
                />
                Hybrid
            </label>
            
            </div>

            {/* Category Select */}
            <div className="md:w-1/3">
            <select
                name="category"
                className="select select-bordered w-full"
                defaultValue=""
            >
                <option value="" disabled>
                Select category
                </option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Sales</option>
                <option>HR</option>
                <option>Developer</option>
            </select>
            </div>

         </div>
        </fieldset>


          {/* Job Category */}
          {/* <fieldset className="border rounded-xl p-5 space-y-4">
            <legend className="font-semibold text-lg px-2">Job Category</legend>

            <select
              name="category"
              className="select select-bordered w-full md:w-1/2"
              defaultValue=""
            >
              <option value="" disabled>
                Select category
              </option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Sales</option>
              <option>HR</option>
              <option>Developer</option>
            </select>
          </fieldset> */}

          {/* Application Deadline */}
          <fieldset className="border rounded-xl p-5 space-y-4">
            <legend className="font-semibold text-lg px-2">
              Application Deadline
            </legend>

            <input
              type="date"
              name="deadline"
              className="input input-bordered w-full md:w-full"
            />
          </fieldset>

          {/* Salary Range */}
          <fieldset className="border rounded-xl p-5 space-y-4">
            <legend className="font-semibold text-lg px-2">
              Salary Range
            </legend>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="label">Minimum Salary</label>
                <input
                  type="number"
                  name="min"
                  className="input input-bordered w-full"
                  placeholder="Minimum salary"
                />
              </div>

              <div>
                <label className="label">Maximum Salary</label>
                <input
                  type="number"
                  name="max"
                  className="input input-bordered w-full"
                  placeholder="Maximum salary"
                />
              </div>

              <div>
                <label className="label">Currency</label>
                <select
                  name="currency"
                  className="select select-bordered w-full"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select currency
                  </option>
                  <option>BDT</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </fieldset>
          {/*description*/}
            <fieldset className="border rounded-xl p-5 space-y-4">
                <legend className="fieldset-legend mb-0">Job Description</legend>
                <textarea className="textarea w-full" name="description" placeholder="Add your job description"></textarea>
            </fieldset>
          {/*requirements*/}
            <fieldset className="border rounded-xl p-5 space-y-4">
                <legend className="fieldset-legend mb-0">Job Requirements</legend>
                <textarea className="textarea w-full" name="requirements" placeholder="Add your job requirements(seperate by commas) "></textarea>
            </fieldset>
          {/*responsibilities*/}
            <fieldset className="border rounded-xl p-5 space-y-4">
                <legend className="fieldset-legend mb-0">Job Responsibilities</legend>
                <textarea className="textarea w-full" name="responsibilities" placeholder="Add your job responsibilities"></textarea>
            </fieldset>

             {/* HR Info */}
          <fieldset className="border rounded-xl p-5 space-y-4">
            <legend className="font-semibold text-lg px-2">
              HR Related Information
            </legend>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="label">HR Name</label>
                <input
                  type="text"
                  name="hr_name"
                  className="input input-bordered w-full"
                  placeholder="HR Name"
                />
              </div>

              <div>
                <label className="label">HR email</label>
                <input
                  type="text"
                  name="hr_email"
                  defaultValue={user.email}
                  className="input input-bordered w-full"
                  placeholder="HR Email"
                />
              </div>
            </div>
          </fieldset>

          {/* Submit Button */}
          <div className="text-center pt-4">
          <button
  type="submit"
  disabled={loading}
  className="btn btn-primary px-10 w-full md:w-auto"
>
  {loading ? "Posting..." : "🚀 Post Job"}
</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddJob;



