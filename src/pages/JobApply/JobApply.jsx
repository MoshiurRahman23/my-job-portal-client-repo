
/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import axios from 'axios';


const JobApply = () => {
  const { id } = useParams();
  const {user}=useAuth();
  const navigate = useNavigate();
  // console.log(id,user)

   const submitJobApplication = e => {
  e.preventDefault();

  const form = e.target;
  const linkedIn = form.linkedIn.value;
  const github = form.github.value;
  const resume = form.resume.value;
  // const data = {linkedIn,resume,github}
  // console.log(data)

  const jobApplication = {
    job_id: id,
    applicant_email: user?.email,
    linkedIn,
    github,
    resume
  };

axios.post('http://localhost:5000/job-applications', jobApplication)
  .then(res=>{
    // console.log(res.data)
    if(res.data.insertedId){
      toast.success("Application submitted successfully 🎉");
      navigate('/myApplications');
    }else{
      toast.error("Already applied");
    }
  })
  .catch(error=> {
    console.log(error);
  });
};


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-200 px-4 md:px-8">

      {/* Animated Heading */}
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4 leading-tight"
      >
        Apply for Your{" "}
        <motion.span
          animate={{ color: ["#2563eb", "#9333ea", "#2563eb"] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="inline-block"
        >
          Dream
        </motion.span>{" "}
        Job
      </motion.h1>

      {/* Description */}
      <p className="text-center text-lg md:text-xl text-gray-700 max-w-lg mb-6">
        Submit your application and take the next step in your career. Best of luck!
      </p>
      <form onSubmit={submitJobApplication} className="card-body w-full shadow-2xl mb-5">
          <div className="form-control">
              <label className="label">
                  <span className="label-text">LinkedIn URL</span>
              </label>
              <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
              <label className="label">
                  <span className="label-text">Github URL</span>
              </label>
              <input type="url" name='github' placeholder="Github URL" className="input input-bordered w-full" required />
          </div>
          <div className="form-control">
              <label className="label">
                  <span className="label-text">Resume URL</span>
              </label>
              <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered w-full" required />
          </div>
          <div className="form-control mt-6">
            {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary px-6 py-3"
          >
            Start Application
          </motion.button>
          </div>
      </form>
    </div>
  );
};

export default JobApply;