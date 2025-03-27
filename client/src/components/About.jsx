import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-4">About SidePocket</h1>
        <p className="text-gray-700 text-base md:text-lg text-center">
          SidePocket is a platform that connects people with job opportunities in their local community.
          Whether you're looking to earn extra cash or find the right person for a task, we make it easy.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-200 p-5 rounded-lg text-center shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">For Job Seekers</h2>
            <p className="text-gray-600 text-sm md:text-base">Find flexible jobs in your area that match your skills and schedule.</p>
          </div>
          <div className="bg-gray-200 p-5 rounded-lg text-center shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">For Employers</h2>
            <p className="text-gray-600 text-sm md:text-base">Post job listings and find the right person for your tasks.</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <button className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
