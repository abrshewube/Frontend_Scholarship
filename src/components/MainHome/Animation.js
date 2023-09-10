import React from 'react';

const ScholarshipStudent = () => {
  return (
    <div className="container flex justify-end items-center p-9 space-x-8">
      <div className="w-1/2">
        <img
          src="https://o.remove.bg/downloads/a515824d-1c65-4455-be1f-ede783530b76/png-transparent-student-course-education-resume-student-tshirt-child-people-removebg-preview.png"
          alt="College Student"
          className="max-w-full h-auto"
        />
      </div>
      <div className="w-2/3 p-3 mr-8">
        <div className="bg-gradient-to-r from-green-400 to-purple-500 rounded-lg shadow-lg p-6">
          <p className="text-white text-lg">
            Yotor Scholarship is a comprehensive online platform dedicated to connecting students with valuable scholarship opportunities. Our mission is to empower and support aspiring scholars in their pursuit of higher education by providing a centralized hub for accessing a wide range of scholarships. With Yotor Scholarship, students can discover scholarships tailored to their unique interests, academic achievements, and personal backgrounds. Our user-friendly interface and powerful search tools make it easy for students to explore scholarships, filter options based on their preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipStudent;