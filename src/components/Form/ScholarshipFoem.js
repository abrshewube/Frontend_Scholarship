// import React, { useState } from "react";
// import axios from "axios";

// const ScholarshipForm = () => {
//   const [scholarshipData, setScholarshipData] = useState({
//     name: "",
//     description: "",
//     eligibilityCriteria: "",
//     applicationDeadline: "",
//     category: {
//       name: "",
//       description: "",
//     },
//     country: {
//       name: "",
//       code: "",
//     },
//     isFeatured: false,
//     imageurl: "",
//     link: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Make a POST request to save the scholarship data
//     axios
//       .post("https://scholarship-ncvp.onrender.com/api/scholarships", scholarshipData)
//       .then((response) => {
//         // Handle success, e.g., show a success message or redirect to a confirmation page
//         console.log("Scholarship created successfully:", response.data);
//       })
//       .catch((error) => {
//         // Handle error, e.g., show an error message
//         console.error("Error creating scholarship:", error);
//       });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     // For nested fields like 'category.name', update the state correctly
//     if (name.includes(".")) {
//       const [parentField, childField] = name.split(".");
//       setScholarshipData((prevState) => ({
//         ...prevState,
//         [parentField]: {
//           ...prevState[parentField],
//           [childField]: value,
//         },
//       }));
//     } else {
//       setScholarshipData({ ...scholarshipData, [name]: value });
//     }
//   }
//   return (
//     <div className="container mx-auto px-4">
//       <h2 className="text-2xl font-bold mb-4 mt-3 text-center">
//         Scholarship Form
//       </h2>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-blue-500">
//             Name:
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={scholarshipData.name}
//             onChange={handleInputChange}
//             className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-blue-500">
//             Description:
//           </label>
//           <textarea
//             name="description"
//             value={scholarshipData.description}
//             onChange={handleInputChange}
//             className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-blue-500">
//             Eligibility Criteria:
//           </label>
//           <input
//             type="text"
//             name="eligibilityCriteria"
//             value={scholarshipData.eligibilityCriteria}
//             onChange={handleInputChange}
//             className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-blue-500">
//             Application Deadline:
//           </label>
//           <input
//             type="date"
//             name="applicationDeadline"
//             value={scholarshipData.applicationDeadline}
//             onChange={handleInputChange}
//             className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

        
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-blue-500">
//             Category Name:
//           </label>
//           <input
//             type="text"
//             name="category.name"
//             value={scholarshipData.category.name}
//             onChange={handleInputChange}
//             className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-blue-500">
//             Category Description:
//           </label>
//           <textarea
//             name="category.description"
//             value={scholarshipData.category.description}
//             onChange={handleInputChange}
//             className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-blue-500">
//             Country Name:
//           </label>
//           <input
//             type="text"
//             name="country.name"
//             value={scholarshipData.country.name}
//             onChange={handleInputChange}
//             className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

         
        
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-blue-500">
//            Country Code:
//           </label>
//           <input
//             type="text"
//             name="country.code"
//             value={scholarshipData.country.code}
//             onChange={handleInputChange}
//             className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           />
//           </div>

//           {/* <div className="mb-4">
//           <label className="block text-sm font-medium text-blue-500">
//           Featured Image:
//           </label>
//           <input
//             type="text"
//             name="isFeatured"
//             value={scholarshipData.isFeatured}
//             onChange={handleInputChange}
//             className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           />
//           </div> */}

// <div>
//           <label className="block text-sm font-medium text-gray-700">Is Featured</label>
//           <input
//             type="checkbox"
//             name="isFeatured"
//             checked={scholarshipData.isFeatured}
//             onChange={(event) => setScholarshipData({ ...scholarshipData, isFeatured: event.target.checked })}
//             className="mt-1 p-2 border rounded-md w-full"
//           />

//           </div>

        
//           <div>
//           <label className="block text-sm font-medium text-gray-700">Image URL</label>
//           <input
//             type="text"
//             name="imageurl"
//             value={scholarshipData.imageurl}
//             onChange={handleInputChange}
//             className="mt-1 p-2 border rounded-md w-full"
//           />
//         </div>


//         <div className="mb-4">
//           <label className="block text-sm font-medium text-blue-500">
//             Link:
//           </label>
//           <input
//             type="text"
//             name="link"
//             value={scholarshipData.link}
//             onChange={handleInputChange}
//             className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>

//         {/* Add fields for 'category', 'country', 'isFeatured', 'imageUrl', and 'link' */}
//         {/* ... */}
//         <div className="mt-6">
//           <button
//             type="submit"
//             className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Create Scholarship
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ScholarshipForm;
