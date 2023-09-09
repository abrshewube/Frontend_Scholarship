import React from 'react';

const sources = [
  {
    name: 'Fastweb',
    url: 'https://www.fastweb.com',
    description:
      'Fastweb is one of the largest scholarship search engines. It offers a comprehensive database of scholarships, grants, and fellowships for students.',
  },
  {
    name: 'Scholarships.com',
    url: 'https://www.scholarships.com',
    description:
      'Scholarships.com provides a wide range of scholarship opportunities for students. It allows you to create a profile and matches you with relevant scholarships based on your information.',
  },
  {
    name: 'College Board Scholarship Search',
    url: 'https://bigfuture.collegeboard.org/scholarship-search',
    description:
      'The College Board Scholarship Search is a tool that helps students find scholarships, grants, and other financial aid opportunities. You can search for scholarships based on various criteria such as location, academic interests, and demographic factors.',
  },
  {
    name: "Peterson's",
    url: 'https://www.petersons.com/scholarship-search',
    description:
      "Peterson's scholarship search engine allows you to search for scholarships based on criteria such as academic achievements, interests, and demographics. The website also provides resources and tips for scholarship applications.",
  },
  {
    name: 'Chegg Scholarships',
    url: 'https://www.chegg.com/scholarships',
    description:
      'Chegg Scholarships offers a wide range of scholarships for students. You can search for scholarships based on your field of study, interests, and demographic information. The website also provides resources and tools to help you with the scholarship application process.',
  },
  {
    name: 'Government Websites',
    url: 'https://www.usa.gov/grants',
    description:
      'Many government agencies, both at the national and local levels, offer scholarships and grants. Check the websites of government departments related to education, such as the Department of Education or your country\'s educational ministry, for information on scholarship opportunities.',
  },
  {
    name: 'Professional Associations and Organizations',
    url: 'https://www.ama-assn.org/education/scholarships-grants',
    description:
      'Various professional associations and organizations offer scholarships for students pursuing specific fields of study. Explore the websites of professional associations related to your area of interest to find scholarship opportunities.',
  },
  {
    name: 'University and College Websites',
    url: 'https://www.exampleuniversity.edu/financial-aid/scholarships',
    description:
      'Visit the websites of the universities and colleges you are interested in attending. They often have information on scholarships available to their students. Check the financial aid or scholarship sections of their websites for details.',
  },
  {
    name: 'Community Foundations and Nonprofit Organizations',
    url: 'https://www.examplefoundation.org/scholarships',
    description:
      'Local community foundations and nonprofit organizations in your area may offer scholarships to students. Research and reach out to these organizations to inquire about scholarship opportunities.',
  },
  {
    name: 'The College Grants Database',
    url: 'https://www.collegegrant.net',
    description:
      'The College Grants Database provides a comprehensive list of grants and scholarships available to students. It offers a searchable database and resources to help you find and apply for scholarships.',
  },
  {
    name: 'InternationalScholarships.com',
    url: 'https://www.internationalscholarships.com',
    description:
      'InternationalScholarships.com is a resource for international students seeking scholarships to study abroad. The website offers a searchable database of scholarships specifically targeting international students.',
  },
  {
    name: 'Cappex',
    url: 'https://www.cappex.com/college/scholarships',
    description:
      'Cappex is an online platform that allows you to search for scholarships, colleges, and financial aid options. It provides a personalized scholarship matching service based on your profile and preferences.',
  },
  {
    name: 'Niche',
    url: 'https://www.niche.com/colleges/scholarships',
    description:
      'Niche offers a scholarship search engine that allows you to find scholarships based on various criteria such as location, major, and ethnicity. The website also provides reviews and information about colleges and universities.',
  },
  {
    name: 'ScholarshipPortal',
    url: 'https://www.scholarshipportal.com',
    description:
      'ScholarshipPortal is an international scholarship database that connects students with scholarships and funding opportunities worldwide. You can search for scholarships based on your country of origin, desired study destination, and academic level.',
  },
  {
    name: 'UNIGO',
    url: 'https://www.unigo.com/scholarships',
    description:
      'UNIGO offers a wide range of scholarships for students. The website provides a searchable database of scholarships, as well as resources and tools to help you with the scholarship application process.',
  },
  {
    name: 'The Scholarship System',
    url: 'https://www.thescholarshipsystem.com',
    description:
      'The Scholarship System provides resources and guidance on how to find and win scholarships. The website offers online courses, tools, and tips to help you maximize your chances of securing scholarships.',
  },
  {
    name: 'Go Overseas Scholarships',
    url: 'https://www.gooverseas.com/scholarships',
    description:
      'Go Overseas Scholarships provides scholarships for students interested in studying abroad. The website offers a list of scholarships specifically for international education programs.',
  },
  {
    name: 'Rotary International Scholarships',
    url: 'https://www.rotary.org/en/our-programs/scholarships',
    description:
      'Rotary International offers various scholarship programs for students at different academic levels. The scholarships are awarded based on academic merit, leadership qualities, and community involvement.',
  },
];

const ScholarshipSources = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-white mb-6">Scholarship Sources</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sources.map((source, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2 text-blue-700 hover:underline">{source.name}</h2>
                <p className="text-gray-800 mb-4">{source.description}</p>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarshipSources;
