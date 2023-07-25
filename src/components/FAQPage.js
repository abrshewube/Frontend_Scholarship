import React, { useState } from 'react';

const FAQ = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (index) => {
    if (showAnswer === index) {
      setShowAnswer(null);
    } else {
      setShowAnswer(index);
    }
  };

  const faqData = [
    {
      question: 'What is the purpose of this scholarship website?',
      answer:
        'Our scholarship website is designed to provide students with information about scholarship opportunities around the world. We aim to make it easier for students to find and apply for scholarships that match their needs and interests.',
    },
    {
      question: 'Who can apply for scholarships through this website?',
      answer:
        'Our scholarships are available to students of all nationalities and backgrounds, provided they meet the eligibility criteria specified for each scholarship.',
    },
    {
      question: 'What are the eligibility criteria for scholarships?',
      answer:
        'The eligibility criteria for each scholarship may vary, but typically include factors such as academic performance, financial need, field of study, and geographic location.',
    },
    {
      question: 'How can I apply for scholarships through this website?',
      answer:
        'To apply for scholarships through our website, you will need to create an account and complete an application form. You will also need to provide any required supporting documents, such as transcripts, essays, or letters of recommendation.',
    },
    {
      question: 'When is the deadline for scholarship applications?',
      answer:
        'The deadline for scholarship applications will vary depending on the scholarship. Please refer to the scholarship details for specific information on deadlines and application requirements.',
    },
    {
      question: 'How will I know if I have been awarded a scholarship?',
      answer:
        'If you are awarded a scholarship, you will be notified by email or through your account on the scholarship portal website. You may also be required to provide additional information or documentation before the scholarship is officially awarded.',
    },
    {
      question: 'How are scholarship funds disbursed?',
      answer:
        'Scholarship funds may be disbursed in various ways, such as through a direct deposit to your bank account, a check mailed to your address, or a credit to your student account at your university.',
    },
    {
      question: 'How can I contact your website if I have questions or concerns?',
      answer:
        'You can contact our website through the contact form on our website or by emailing our support team at [insert email address]. We aim to respond to all inquiries within [insert time frame].',
    },
  ];

  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="cursor-pointer flex items-center justify-between py-2 border-b border-gray-300"
            onClick={() => toggleAnswer(index)}
          >
            <p className="text-lg font-semibold">{item.question}</p>
            <span className="text-blue-500">
              {showAnswer === index ? '-' : '+'}
            </span>
          </div>
          {showAnswer === index && (
            <div className="mt-2 text-gray-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
