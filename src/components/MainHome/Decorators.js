import React from 'react';
import StudentSvg from './student.svg'; // Import your SVGs
import CollegeSvg from './college.svg'; // Import your SVGs
import ScholarshipSvg from './scholarship.svg'; // Import your SVGs

const ScholarshipInfoPage = () => {
  
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Explore Scholarship Opportunities
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Discover a world of opportunities for students like you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Student Illustration */}
          <div className="flex flex-col items-center">
            <img
              src={StudentSvg}
              alt="Student Illustration"
              className="w-32 h-32 mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              For Students
            </h2>
            <p className="text-gray-600">
              Find scholarships tailored to your goals.
            </p>
          </div>
          {/* College Illustration */}
          <div className="flex flex-col items-center">
            <img
              src={CollegeSvg}
              alt="College Illustration"
              className="w-32 h-32 mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              For Colleges
            </h2>
            <p className="text-gray-600">
              Connect with talented students and promote your institution.
            </p>
          </div>
          {/* Scholarship Illustration */}
          <div className="flex flex-col items-center">
            <img
              src={ScholarshipSvg}
              alt="Scholarship Illustration"
              className="w-32 h-32 mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Scholarships
            </h2>
            <p className="text-gray-600">
              Explore a wide range of scholarship opportunities.
            </p>
          </div>
        </div>
      </div>
    
    </div>
    
  );
};

export default ScholarshipInfoPage;
