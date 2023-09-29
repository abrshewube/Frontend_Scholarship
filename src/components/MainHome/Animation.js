import React from 'react';

const ScholarshipStudent = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-center items-center p-4 md:p-9 space-y-4 md:space-y-0">
      <div className="w-full md:w-1/2">
        <img
          src="https://i.ibb.co/wKxDVyn/college-university-students-group-young-happy-people-standing-isolated-white-background-575670-66-re.png"
          alt="College Student"
          className="max-w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 p-3 md:mr-8">
        <div className="bg-gradient-to-r from-green-400 to-purple-500 rounded-lg shadow-lg p-6">
          <p className="text-white text-sm md:text-lg">
            Yotor Scholarship is a comprehensive online platform dedicated to connecting students with valuable scholarship opportunities. Our mission is to empower and support aspiring scholars in their pursuit of higher education by providing a centralized hub for accessing a wide range of scholarships. With Yotor Scholarship, students can discover scholarships tailored to their unique interests, academic achievements, and personal backgrounds. Our user-friendly interface and powerful search tools make it easy for students to explore scholarships, filter options based on their preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipStudent;
