import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import axios from "axios";

const PostJobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobCategory, setJobCategory] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jobData = { jobTitle, jobCategory, jobDescription, budget, location };
    try {
      const response = await axios.post("http://localhost:5000/api/jobs/post-job", jobData);
      console.log("Job posted successfully:", response.data);
      alert("Job posted successfully!");
      setJobTitle("");
      setJobCategory("");
      setJobDescription("");
      setBudget("");
      setLocation("");
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div className="bg-gray-50 flex justify-center items-center min-h-screen px-4 py-10">
      <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg max-w-3xl w-full">
        <h1 className="text-3xl font-semibold text-center mb-6">Post a Job</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700">Job Title</label>
            <input
              type="text"
              placeholder="e.g. Senior Web Developer needed"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Job Category</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              value={jobCategory}
              onChange={(e) => setJobCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="software">Software Development</option>
              <option value="design">Graphic & UI/UX Design</option>
              <option value="marketing">Marketing & Sales</option>
              <option value="writing">Content Writing</option>
              <option value="video-editing">Video Editing</option>
              <option value="photography">Photography</option>
              <option value="construction">Construction & Repair</option>
              <option value="delivery">Delivery & Logistics</option>
              <option value="tutoring">Tutoring & Coaching</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Job Description</label>
            <textarea
              placeholder="Describe the job requirements, responsibilities..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none h-28 resize-none"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Budget</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">₹</span>
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full pl-8 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700">Location</label>
            <div className="relative">
              <FiMapPin className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Enter job location"
                className="w-full pl-8 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700
          font-semibold py-3 rounded-lg transition flex items-center justify-center">
            <FaRegPaperPlane className="mr-2" /> Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJobForm;
