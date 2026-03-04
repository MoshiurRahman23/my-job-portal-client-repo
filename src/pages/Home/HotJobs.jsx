import { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(8);
 

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('http://localhost:5000/jobs');
        if (!res.ok) throw new Error('Failed to fetch jobs');
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p className="text-center py-10">Loading jobs...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;

  // ✅ Pagination Logic
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const selectedJobs = jobs.slice(startIndex, startIndex + jobsPerPage);
  return (
   <div className="px-4 md:px-8 lg:px-12 py-6">
  <h2 className="text-3xl font-bold mb-6 text-center">Hot Jobs</h2>

  {/* Job Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {selectedJobs.map((job) => (
      <HotJobCard key={job._id} job={job} />
    ))}
  </div>

  {/* Pagination Section */}
  <div className="flex justify-center items-center mt-8 gap-2 flex-wrap">

    {/* Previous */}
    <button
      className="px-3 py-1 border rounded disabled:opacity-50"
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(prev => prev - 1)}
    >
      Prev
    </button>

    {/* Page Numbers */}
    {[...Array(totalPages)].map((_, index) => {
      const pageNumber = index + 1;
      return (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className={`px-3 py-1 border rounded ${
            currentPage === pageNumber
              ? "bg-blue-600 text-white"
              : ""
          }`}
        >
          {pageNumber}
        </button>
      );
    })}

    {/* Per Page Select */}
    <select
      value={jobsPerPage}
       onChange={(e) => {
          const value = e.target.value;
          setJobsPerPage(value === "all" ? jobs.length : Number(value));
          setCurrentPage(1);
        }}
      className="px-3 py-1 border rounded"
    >
      <option value={4}>4</option>
      <option value={8}>8</option>
      <option value={12}>12</option>
      <option value={16}>16</option>
      <option value="all">All</option>
    </select>

    {/* Next */}
    <button
      className="px-3 py-1 border rounded disabled:opacity-50"
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(prev => prev + 1)}
    >
      Next
    </button>

  </div>
</div>
  );
};

export default HotJobs;