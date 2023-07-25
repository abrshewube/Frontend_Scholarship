import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 mt-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-700 shadow-md">Privacy Policy</h1>
      <p className='text-red-800'>
        Last updated: 12/30/2023
      </p>
      <p>
        1. Information Collected
      </p>
      <p >
        We collect the following types of personal information from visitors to our scholarship website:
      </p>
      <ul className="list-disc ml-8 text-blue-600">
        <li>Names</li>
        <li>Email addresses</li>
        <li>Contact information (such as phone numbers and mailing addresses)</li>
        <li>Academic information (such as GPA and field of study)</li>
        <li>Any other information provided voluntarily by users</li>
      </ul>
      <p>
        In addition to the above, our website may use cookies and similar tracking technologies to collect certain information automatically. This includes IP addresses, browser type, device information, and usage data. Cookies help us improve the functionality and user experience of our website.
      </p>
      <p>
        2. Use of Information
      </p>
      <p>
        The personal information we collect is used for the following purposes:
      </p>
      <ul className="list-disc ml-8 text-blue-600" >
        <li>To communicate with scholarship applicants and recipients</li>
        <li>To process scholarship applications and evaluate eligibility</li>
        <li>To send relevant scholarship opportunities and updates to users who have opted-in to receive such communications</li>
        <li>To improve the content and functionality of our website</li>
        <li>To comply with legal and regulatory requirements</li>
      </ul>
      <h1 >
        3. Sharing of Information
      </h1>
      <p>
        We may share personal information with third parties under the following circumstances:
      </p>
      <ul className="list-disc ml-8 text-blue-600 ">
        <li>With scholarship sponsors and providers for application and evaluation purposes</li>
        <li>With payment processors for processing scholarship payments</li>
        <li>With service providers who assist us in operating our website and providing services to users</li>
        <li>With law enforcement agencies or other governmental authorities when required by law or to protect our rights and the rights of our users</li>
      </ul>
      {/* Add other sections of the Privacy Policy as needed */}
    </div>
  );
};

export default PrivacyPolicyPage;
