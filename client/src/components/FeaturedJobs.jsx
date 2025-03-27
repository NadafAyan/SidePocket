import React from "react";
import img1 from "../assests/featured jobs 1.jpg";
import img2 from "../assests/featured jobs 2.jpg";
import img3 from "../assests/featured jobs 3.jpg";

const jobs = [
  {
    id: 1,
    bid: "₹100",
    timeRemaining: "5h",
    image: img1,
    title: "Delivery",
    distance: "5kms away",
  },
  {
    id: 2,
    bid: "₹250",
    timeRemaining: "8h",
    image: img2,
    title: "Content Writing",
    distance: "24kms away",
  },
  {
    id: 3,
    bid: "₹75",
    timeRemaining: "3h",
    image: img3,
    title: "Cleaning",
    distance: "0.8kms away",
  },
];

const FeaturedJobs = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Featured Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
              <div>
                <div className="flex justify-between p-3 bg-gray-200 text-sm md:text-base">
                  <span className="font-semibold">Bid - {job.bid}</span>
                  <span className="text-gray-600">Time left - {job.timeRemaining}</span>
                </div>
                <img src={job.image} alt={job.title} className="w-full h-64 object-cover" />
              </div>
              <div className="p-4 flex justify-between items-center text-sm md:text-base">
                <span className="font-medium">{job.title}</span>
                <span className="text-gray-600">{job.distance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-t-2 border-solid mt-5" />
    </>
  );
};

export default FeaturedJobs;
