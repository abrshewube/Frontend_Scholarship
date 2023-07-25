import React from 'react';

const HowToApply = () => {
  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
      <p className="mb-4">
        Welcome to the scholarship application process! Below is a step-by-step guide on how to apply for scholarships.
      </p>

      <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
      <p className="mb-4">
        Before you begin the application process, please review the eligibility criteria for each scholarship available on our website. Eligibility criteria may vary and could include factors such as academic performance, financial need, field of study, and geographic location.
      </p>

      <h3 className="text-lg font-semibold mb-2">Application Requirements</h3>
      <p className="mb-4">
        To apply for scholarships, you will need to provide certain documents and information. Common application requirements may include:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Transcripts or academic records</li>
        <li>Essays or personal statements</li>
        <li>Letters of recommendation</li>
        <li>Proof of financial need (if required)</li>
        <li>Any additional documents specified in the scholarship description</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">Application Process</h3>
      <p className="mb-4">
        To apply for scholarships, follow these steps:
      </p>
      <ol className="list-decimal pl-6 mb-4">
        <li>Create an account on the website of the university/collge using your email address.</li>
        <li>Complete the scholarship application form, providing accurate and detailed information.</li>
        <li>Upload and submit all required documents as specified in the application form.</li>
        <li>Review your application before submission to ensure all information is correct and all required documents are included.</li>
        <li>Submit your application before the specified deadline.</li>
      </ol>

      <h3 className="text-lg font-semibold mb-2">Tips for a Successful Application</h3>
      <p className="mb-4">
        Here are some tips to increase your chances of success in the scholarship application process:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Highlight your academic achievements, extracurricular activities, and community involvement in your application.</li>
        <li>Tailor each application to the specific scholarship requirements and criteria.</li>
        <li>Write a compelling and authentic essay that showcases your unique qualities and aspirations.</li>
        <li>Proofread your application and essays to avoid any spelling or grammatical errors.</li>
        <li>Submit your application well before the deadline to ensure it is received on time.</li>
      </ul>
    </div>
  );
};

export default HowToApply;
